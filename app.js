const ACCESSKEYID = require('./config/development_keys.js');
const SECRETACCESSKEY = require('./config/development_keys');
const mongoose = require('mongoose');
const express = require("express");
const path = require("path");

// Route imports
const users = require("./routes/api/users");
const products = require("./routes/api/products");

const app = express();
const db = require('./config/keys').mongoURI;
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');
const aws = require('aws-sdk');

// DB CONNECTION //
mongoose 
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// MIDDLEWARE //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);

// ROUTES //
app.use("/api/users", users);
app.use("/api/products", products);

// SERVER CONFIG //
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))


// PRODUCTION CODE //
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// AWS //
// aws.config.region = 'us-west-2';
aws.config.update({ region: 'us-west-2', 
  accessKeyId: ACCESSKEYID, 
  secretAccessKey: SECRETACCESSKEY })

// aws.config.update("AKIAYDS34JFRKYL6KQ4Q", "R3B84E9WodZsDf5mFgREutxJ166tT7c3J/H39TZK");
const S3_BUCKET = process.env.S3_BUCKET;

// this is hardcoded but should be like line 53
// const S3_BUCKET = 'getsy-app'

// respond to GET requests to '/' - this will need to be updated to the profile page
// upon request, render the 'splash.js' page
app.get('/', (req, res) => res.render('splash.js'));

//  * Respond to GET requests to / sign - s3.
//  * Upon request, return JSON containing the temporarily - signed S3 request and
  // * the anticipated URL of the image.
//  * /
app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });

});

app.post('/save-details', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  // const fileName = "image";
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});
