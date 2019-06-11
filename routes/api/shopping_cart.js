const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ShoppingCartItem = require('../../models/Shopping_cart');
const User = require('../../models/User');
const Product = require('../../models/Product');

router.get("/test", (req, res) => res.json({ msg: "This is the shopping_cart route" }));

router.get('/:user_id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    ShoppingCartItem.find({owner_id: req.params.user_id})
      .then(items => {
        if (Array.isArray(items) && items.length == 0) { 
          res.status(400).json({notFound: "Your cart is empty."})
        }
        else {
          let total;
          items.forEach(item => {
            let price = Product.findById(item.product_id).price
            total += price;
          })
          res.json({totalPrice: total, items: items})
        };
      })
      .catch(err => 
        res.status(404).json(err.message)
      )
})

router.post('/', (req, res) => {
  passport.authenticate('jwt', { session: false })

  // if (ShoppingCartItem.find({owner_id: req.shoppingCartItem.owner_id, product_id: req.shoppingCartItem.product_id})) {
    if (ShoppingCartItem.find({owner_id: req.body.owner_id, product_id: req.body.product_id})) {
    ShoppingCartItem.updateOne({ quantity: (req.shoppingCartItem.quantity + 1) })
  }
  const newShoppingCartItem = new ShoppingCartItem({
    owner_id: req.shoppingCartItem.owner_id,
    product_id: req.shoppingCartItem.product_id,
    quantity: req.shoppingCartItem.quantity
  })
  
  newShoppingCartItem.save() 
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err.message))
})



router.delete("/delete/:id", (req, res) => {
  passport.authenticate('jwt', { session: false })
    ShoppingCartItem.findByIdAndDelete(req.params.id) 
      .then(item => {
        if (item._id === req.body.product_id) {
          ShoppingCartItem.findByIdAndRemove(item._id, err => {
            if (err) res.send(err);
            else res.json({ id: item._id })
          })
        } 
      })
})

router.delete("/delete_cart/:user_id", (req, res) => {
  passport.authenticate('jwt', { session: false })
    ShoppingCartItem.deleteMany({ owner_id: req.params.user_id }, (err, data) => {
      if (err) {
        return err 
      } else {
        res.json({
          message: "Your cart is now empty."
        })
      }
    })
})

module.exports = router;