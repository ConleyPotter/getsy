const { getObjectId } = require("../../helpers/index");
const faker = require("faker");
const User = require('../../../models/User');

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
]

const fakerData = [];

for (let i = 0; i < 200; i++) {
  const productName = faker.commerce.productName();
  fakeProduct = {
    _id: getObjectId(`products${i}`),
    name: productName,
    price: faker.commerce.price(),
    description: 
      `A ${faker.commerce.productAdjective()} ${productName} 
      made with locally-sourced ${faker.commerce.productMaterial()}`,
    owner_id: User.findOne()._id,
    date: faker.date.recent(),
    category: categories[Math.floor(Math.random() * categories.length)]
  };
  fakerData.push(fakeProduct);
}

module.exports = fakerData;
