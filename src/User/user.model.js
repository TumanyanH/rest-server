const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    fullName : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    token : {
        type: String,
        required: true
    },
    isActive : {
        type: Boolean,
        default: false
    },
    balance : {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("User", userSchema)