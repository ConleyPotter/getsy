require('dotenv').config();
const mongoose = require('mongoose');
const express = require("express");
const path = require("path");

// Route imports
const users = require("./routes/api/users");
const products = require("./routes/api/products");
const shopping_cart = require("./routes/api/shopping_cart");

const app = express();
const db = require('./config/keys').mongoURI;
const User = require('./models/User');
const bodyParser = require('body-parser');
const passport = require('passport');

const multer = require('multer');

// DB CONNECTION //
mongoose 
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

// MIDDLEWARE //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(multer().array());

app.use(passport.initialize());
require('./config/passport')(passport);

// ROUTES //
app.use("/api/users", users);
app.use("/api/products", products);
app.use("/api/cart", shopping_cart)

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