const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ShoppingCartItem = require('../../models/Shopping_cart');
const User = require('../../models/User');

router.get("/test", (req, res) => res.json({ msg: "This is the shopping_cart route" }));

router.get('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    ShoppingCartItem.findById(req.user.id)
      .then(item => res.json(item))
      .catch(err => 
        res.status(404).json({ empty: "Your shopping cart is empty."})
      )
})

router.post('/', (req, res) => {
  passport.authenticate('jwt', { session: false })
  
  const newShoppingCartItem = new ShoppingCartItem({
    owner_id: req.user.id,
    product_id: product._id,
    quantity: req.quantity
  })
  
  newShoppingCartItem.save() 
    .then(item => res.json(item))
    .catch(err => res.status(400).json(err.message))
})

// router.post('/edit', (req, res) => {
//   passport.authenticate('jwt', { session: false })
//     ShoppingCartItem.findById(req.user._id)
//       .then(item => {
//         if (item) {
//           ShoppingCartItem.updateOne({ owner_id: req.user._id }, { quantity: req.quantity})
//         } else {
//           const newShoppingCartItem = new ShoppingCartItem ({
//             owner_id: user._id,
//             product_id: product._id,
//             quantity: req.quantity
//           })
//         } 
//       })
//       .catch(err => 
//         res.status(400).json({ error: "Unable to update cart." })
//       );
// })


router.delete("/delete", (req, res) => {
  passport.authenticate('jwt', { session: false })
    ShoppingCartItem.findById(req.user._id)
      .then(item => {
        if (item._id === req.product_id) {
          ShoppingCartItem.findByIdAndRemove(req.product_id, err => {
            if (err) res.send(err);
            else res.json({ message: "This item has been removed from your cart." })
          })
        } 
      })
})

module.exports = router;