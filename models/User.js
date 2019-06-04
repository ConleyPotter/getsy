const mongoose = require('mongoose')

function lengthValidator (v) {
  return v.length > 4;
};

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        validate: [
            lengthValidator,
            "Password should be at least 5 characters long."
        ],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = User = mongoose.model('users', UserSchema)
