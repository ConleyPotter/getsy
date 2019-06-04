const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Product = require('../../models/Product');
const { validateProductDescription, userExistsValidator } =
  require('../../validation/products')

// Testing route
router.get("/test", (req, res) => res.json({ msg: "This is the products route" }));

// Index route
router.get('/', (req, res) => {
  Product.find()
    // I dont know how we'll want to sort the products, but this is in
    // reverse chronological order, newest first
    .sort({ date: -1 })
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No products found' }));
});

// Index by user
router.get('/user/:user_id', (req, res) => {
  Product.find({user: req.params.user_id})
    .then(products => res.json(products))
    .catch(err => 
      res.status(404).json({ noproductsfound: 'No products found from that user'}
      )
    );
})

// Show route
router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err =>
      res.status(404).json({ noproductsfound: "No product found with that ID" })
    );
});

// Protected route to post a product
router.post('/', 
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProductDescription(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      user_id: req.user.id,
      date: req.body.date
    });

    newProduct.save().then(product => res.json(product));
  }
);

module.exports = router;
