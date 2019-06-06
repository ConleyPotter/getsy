const { getObjectId } = require('../../helpers/index');
const faker = require('faker');
const bcrypt = require('bcryptjs');

const fakerData = []
const encryptPassword = () => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("password", salt, (err, hash) => {
      if (err) throw err;
      return hash;
    })
  })
}

for (let i = 0; i < 100; i++) {
  fakeUser = {
    _id: getObjectId(`user${i}`),
    fName: faker.name.firstName(),
    email: faker.internet.email(),
    password: encryptPassword()
  };

  fakerData.push(fakeUser);
}

module.exports = fakerData;