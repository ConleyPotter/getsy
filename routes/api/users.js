const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require("../../models/User");
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

router.get("/test", (req, res) => {
    res.json({msg: "In the user route"})
});

router.get("/success", passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        email: req.user.email,
        fName: req.user.fName
    });
})
////USER CREATE/////////////  
router.post('/register', (req,res)=>{
    User.findOne({ email: req.body.email})
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
    const email = req.body.email;
    const unSaltedpassword = req.body.password;

    User.findOne({email})
    .then(user => {
        if (!user) {
            return res.status(404).json({email: "This user does not exist"});
        }

        bcrypt.compare(unSaltedpassword, user.password)
        .then(isMatch => {
            if (isMatch) {
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
                // res.json({msg: 'Success'});
            } else {
                return res.status(400).json({password: 'Incorrect password'});
            }
        })
    })

})

module.exports = router;
