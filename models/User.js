const mongoose = require('mongoose')

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
        min: 4,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
})

module.exports = User = mongoose.model('users', UserSchema)
