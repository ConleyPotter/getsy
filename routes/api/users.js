const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require("../../models/User");

router.get("/test", (req, res) => {
    res.json({msg: "In the user route"})
});
<<<<<<< HEAD

router.post('/register', (req,res) => {
    User.findOne({ email: req.body.email })
=======
  
router.post('/register', (req,res)=>{
    User.findOne({ email: req.body.email})
>>>>>>> d02954fbbb4fbcfd584515c9dcc08c1afe91f2a1
    .then(user => {
        if (user) {
            return res.status(400).json({email: "A user with that email is registered"})
        } else {
            const newUser = new User({
                fName: req.body.fName,
                email: req.body.email,
                password: req.body.password
            })
            // newUser.save().then(user => res.send(user)).catch(err => res.send(err));
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                  throw err;
                }
                newUser.password = hash;
                newUser.save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              })
            })
        }
    })
})

module.exports = router;
