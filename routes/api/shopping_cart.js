const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ShoppingCartItem = require('../../models/Shopping_cart');
const User = require('../../models/User');

router.get("/test", (req, res) => res.json({ msg: "This is the shopping_cart route" }));

router.get('/:user_id', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    ShoppingCartItem.find({owner_id: req.params.user_id})
      .then(item => {
        if (Array.isArray(item) && item.length == 0) { 
          res.status(400).json({notFound: "Your cart is empty."})
        }
        else res.json(item);
      })
      .catch(err => 
        res.status(404).json(err.message)
      )
})

router.post('/', (req, res) => {
  passport.authenticate('jwt', { session: false })
  if (ShoppingCartItem.find({owner_id: req.shoppingCartItem.owner_id, product_id: req.shoppingCartItem.product_id})) {
    ShoppingCartItem.updateOne({ quntity: (req.shoppingCartItem.quantity + 1) })
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
            else res.json({ message: "This item has been removed from your cart." })
          })
        } 
      })
})

module.exports = router;