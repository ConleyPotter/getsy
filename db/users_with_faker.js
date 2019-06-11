const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');
const mongoose = require('mongoose');

const db = require("../config/keys").mongoURI;

categories = [
  "jewelry_and_accessories",
  "clothing_and_shoes",
  "home_and_living",
  "wedding_and_party",
  "toys_and_entertainment",
  "art_and_collectibles",
  "craft_supplies",
  "vintage",
  "gifts"
];

fakeUsers = [];
fakeProducts = [];

for (let i = 0; i < 100; i++) {
  fakeUser = new User({
    fName: faker.name.firstName(),
    email: faker.internet.email(),
    password: "password"
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(fakeUser.password, salt, (err, hash) => {
      if (err) {
        throw err;
      }
      fakeUser.password = hash;
      fakeUsers.push(fakeUser);
    })
  })

  fakeUser.save()


  const productName = faker.commerce.productName();
  fakeProduct = new Product ({
    name: productName,
    price: faker.commerce.price(),
    description: `A ${faker.commerce.productAdjective()} ${productName} 
    made with locally-sourced ${faker.commerce.productMaterial()}`,
    owner_id: fakeUser._id,
    date: faker.date.recent(),
    category: categories[Math.floor(Math.random() * categories.length)]
  });

  fakeProducts.push(fakeProduct);
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB successfully")
    // User.insertMany(fakeUsers, function(err, docs) {
    //   if (err) throw err;
    //   else console.log(docs);
    // });
    
    Product.insertMany(fakeProducts, function(err, docs) {
      if (err) throw err;
      else console.log(docs);
    });
  });
