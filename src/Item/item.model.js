const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const itemSchema = Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        default : 0
    },
    imageUrls : [{
        type : String,
        required : true
    }],
    seen : {
        type : Number, 
        default : 0
    },
    userId : {
        type : mongoose.Types.ObjectId,
        refs : "User",
        required : true
    },
    active : {
        type : Number,
        default : 1
    }
}, { timestamps : true })

module.exports = mongoose.model("Item", itemSchema)