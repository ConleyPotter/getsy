require('dotenv').config();
const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
var AWS = require("aws-sdk");
var multer = require("multer")
const Product = require('../../models/Product');
const User = require('../../models/User');
const { validateProductDescription, userExistsValidator } =
  require('../../validation/products')

  var storage = multer.memoryStorage();
  var upload  = multer({storage: storage});

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
router.post('/', upload.single("file"),
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProductDescription(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    if (!req.file){
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
    } else {
      const file = req.file;
      const s3FileURL = process.env.AWS_FILEURL;
        

      let s3bucket = new AWS.S3({
        secretAccessKey: process.env.AWS_SECRET,
        accessKeyId: process.env.AWS_ACCESS,
        region: process.env.AWS_REGION
      });

      var params = {
          Bucket: process.env.AWS_BUCKET,
          //maybe append Date.now() to key will create unique
          Key: Date.now() + file.originalname, 
          Body: file.buffer,
          ContentTypr: file.mimetype,
          ACL: "public-read"
      }

      s3bucket.upload(params, function(err,data){
          if(err){
              res.status(500).json({error: true, Message: err})
          } else {  
              var newFileUploaded = {
                  description: req.body.description,
                  fileLink: s3FileURL + params.Key
              };

            const newProduct = new Product({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                owner_id: req.user.id,
                date: Date.now(),
                category: req.body.category,
                image_url: newFileUploaded.fileLink
              });
              newProduct.save()
              .then(product => {
                User.findById(product.owner_id)
                  .then(user => {
                     const filter = {
                       fName: user.fName,
                       email: user.email,
                       id: user._id,
                       _id: user._id,
                       date: user.date
                     }
                     res.json({product: product, user: filter})
                  })
              
              })
              .catch(err => res.status(400).json(err.message))
            
          }
      })

    }
  });

// route to search by category
router.get('/cat/:category', (req, res) => {
  Product.find({ category: req.params.category })
    .then(products => res.json(products))
    .catch(err => 
      res.status(404).json({ noproductsfound: 'No products found in that catgeory'}
      )
    );
});
  
        
router.patch("/:id", upload.none(), (req, res) => {
  

  Product.findOneAndUpdate({_id: req.body._id}, 
    {$set: 
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
        
      }
    }).then(product => {
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

    
  });



router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, err => {
    if (err) res.send(err);
    else res.json({
      
      message: "Product has been deleted"
    });
  });
});

module.exports = router;
