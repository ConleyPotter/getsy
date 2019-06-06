const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Product = require('../../models/Product');
const User = require('../../models/User');
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

// Show route
router.get("/:id", (req, res) => {
  
  Product.findById(req.params.id)
  .then(product => {
    if(product){
      User.findById(product.owner_id)
      .then(user => {
        if (user) {
          const filter = {
            fName: user.fName,
            email: user.email,
            _id: user._id
          }
          res.json({product: product, user: filter})
        }
      })
    }
  })
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
      owner_id: req.user.id,
      date: req.body.date
    });

    newProduct.save()
      .then(product => res.json(product))
      .catch(err => res.status(400).json(err.message));
  }
);

// route to search by category
router.post('/:category', (req, res) => {
  Product.find({ category: req.params.category })
    .then(products => res.json(products))
    .catch(err => 
      res.status(404).json({ noproductsfound: 'No products found in that catgeory'}
      )
    );
})

module.exports = router;


// Index by user - I think this should be in the user model
// products belong to a user, so we search by user first
// and then pull all the products belonging to that user.
// There is an additional search for products matching the owner_id, but I don't know if that's
// necessary (only 1 item in the db so hard to test, but this should just return all products
// belonging to a user)
// router.get('/user/:user_id', (req, res) => {
//   Product.find({owner_id: User.findById(req.params.user_id).id})
//     .then(products => res.json(products))
//     .catch(err => 
//       res.status(404).json({ noproductsfound: 'No products found from that user'}
//       )
//     );
// })