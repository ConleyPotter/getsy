const express = require("express");
const router = express.Router();

// Model
const User = require("../../models/User");
const Product = require("../../models/Product");

// Password config
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Validations //
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => {
    res.json({msg: "In the user route"})
});

//test route for successful login
router.get("/success", passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email,
        fName: req.user.fName
    });
})
//user show////
router.get("/u/:user_id", (req, res)=>{
    User.findById(req.params.user_id)
    .then(user => {
        res.json({
            id: user.id,
            email: user.email,
            fName: user.fName
        });
    })
    .catch(err => res.status(404).json({nouser: "Could not find a user with that id"}))
})

////USER CREATE/////////////  
router.post('/register', (req,res)=>{
    const {errors, isValid } = validateRegisterInput(req.body);

    if (!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email}).then(user => {
        if (user) {
            errors.email = "A user with that email already exists";
            return res.status(400).json(errors);
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
                  .then(user => {
                    const payload = {id: user.id, fName: user.fName, email: user.email};
                    jwt.sign(
                        payload, keys.secretOrKey, {expiresIn: 3600},
                        (err, token) => {
                            res.json({
                                success: true,
                                token: 'Bearer ' + token
                            });
                        }
                    )
                  })
                  .catch(err => console.log(err));
              })
            })
        }
    })
})
/////////////USER LOGIN//////////////////
router.post("/login", (req,res)=> {

    const {errors, isValid } = validateLoginInput(req.body);

    if (!isValid){
        return res.status(400).json(errors) 
    }

    const email = req.body.email;
    const unSaltedpassword = req.body.password;

    User.findOne({email})
    .then(user => {
        if (!user) {
            errors.email = "User with this email does not exist";
            return res.status(404).json(errors);
        }
 
        bcrypt.compare(unSaltedpassword, user.password)
        .then(isMatch => {
            if (isMatch) {
                const payload = {id: user.id, fName: user.fName, email: user.email};
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {expiresIn: 3600},
                    (err, token) => {
                        res.json({
                            success: true,
                            token: 'Bearer ' + token
                        });
                    }
                )
                // res.json({msg: 'Success'});
            } else {
                // errors.password = 'Incorrect password';
                errors.invalid = 'Incorrect email/password combination'
                return res.status(400).json({password: errors}); // added a key
            }
        })
    })

})
///finds user's product
router.get('/:user_id', (req, res) => {
    Product.find({ owner_id: req.params.user_id })
      .then(products => res.json(products))
      .catch(err =>
        res.status(404).json({ noproductsfound: 'No products found from that user' }
        )
      );
  })

module.exports = router;
