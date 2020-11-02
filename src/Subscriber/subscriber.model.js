const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscriberSchema = Schema({
    email : {
        type : String,
        required : true
    },
    sent : {
        type : Number,
        default : 0
    }
}, { timestamps : true })

module.exports = mongoose.model("Subscriber", subscriberSchema)