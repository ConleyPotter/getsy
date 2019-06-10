require('dotenv').config();
const express = require("express");
const router = express.Router();
const multer = require("multer");
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
          Key: file.originalname,
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
                  fileLink: s3FileURL + file.originalname
              };

            res.send({results: newFileUploaded, data: data})
            //   var document = new DOCUMENT(newFileUploaded);
            //     document.save(function(error, newFile) {
            //         if (error) {
            //         throw error;
            //         }
            //     });
          }
      })
  })

  module.exports = router;