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
      date: req.body.date,
      category: req.body.category
    });

    newProduct.save()
      .then(product => {
        User.findById(product.owner_id)
        .then(user => {
          const filter = {
            fName: user.fName,
            email: user.email,
            _id: user._id
          }
          
          res.json({product: product, user: filter})
        })
      })
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
});

// router.patch("/:id", (req, res) => {
//   Product.updateOne({_id: req.params.id}, {
//     name: req.body.name,
//     price: req.body.price,
//     description: req.body.description,
//     category: req.body.category
//   }, {returnOriginal: false},
//   product => res.json(product));
// });

router.patch("/:id", (req, res) => {
  Product.updateOne({_id: req.params.id}, 
    {$set: 
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
      }
    }, {returnOriginal: false},
  product => res.json(product));
});



router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
    else res.json({message: "Product has been deleted"});
  });
});

module.exports = router;
