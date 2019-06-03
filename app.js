const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");

const app = express();
const db = require('./config/keys').mongoURI;
const User = require('./models/User');
const bodyParser = require('body-parser');

mongoose 
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  
  // const user1 = new User({
  //   email: 'detective@ace.com',
  //   fName: 'Jimmy',
  //   password: 'salt'
  // });
  // user1.save();

  res.send("Checking Mongoose");
})
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
