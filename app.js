const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use(cors())

dotenv.config()

app.get('/books', (req, res, next) => {
    return res.json([
        {
            name : "The brief history of time",
        },
        {
            name : "The brief history of time",
        },
        {
            name : "The brief history of time",
        }
    ])
})

app.listen(process.env.PORT || 3000, (err, res) => {
    if(!err) {
        console.log('ok')
    }
})