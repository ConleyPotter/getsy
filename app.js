const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");

const app = express();
const db = require('./config/keys').mongoURI;
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');

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

// SERVER CONFIG //
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))
