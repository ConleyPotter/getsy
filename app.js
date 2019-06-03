const mongoose = require('mongoose');
const express = require("express");
const users = require("./routes/api/users");

const app = express();
const db = require('./config/keys.js').mongoURI;
mongoose 
  .connect(db, { useNewUrlParser: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Checking Mongoose"));
app.use("/api/users", users);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
