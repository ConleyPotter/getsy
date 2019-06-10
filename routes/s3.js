require('dotenv').config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product")

var AWS = require("aws-sdk");


var storage = multer.memoryStorage();
var upload  = multer({storage: storage});



  router.post("/upload", upload.single("file"), function(req,res){
      const file = req.file;
      const s3FileURL = process.env.AWS_FILEURL;
        console.log(file);

      let s3bucket = new AWS.S3({
        secretAccessKey: process.env.AWS_SECRET,
        accessKeyId: process.env.AWS_ACCESS,
        region: process.env.REGION
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

            res.send({results: newFileUploaded, data: data})

            // const newProduct = new Product({
            //     name: "Test1",
            //     price: 3.99,
            //     description: "arbitrary",
            //     owner_id: "5cf9871f4b2249404f447c2d",
            //     date: Date.now(),
            //     category: "random",
            //     image_url: newFileUploaded.fileLink
            //   });
            //   newProduct.save()
            //   .then(product => res.json(product))
            //   .catch(err => res.status(400).json(err.message))
            
          }
      })
  })

  module.exports = router;