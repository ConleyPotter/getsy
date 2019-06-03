const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/test", (req, res) => {
    res.json({msg: "In the user route"})
});

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
            newUser.save().then(user => res.send(user)).catch(err => res.send(err));
        }
    })
})

module.exports = router;
