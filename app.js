const express = require("express")
const { connect } = require('./config/dbConnect')
const bodyParser = require("body-parser")

require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended : true }))

require('./config/routes')(app)

app.listen(process.env.SERVER_PORT || 3000, (err, res) => {
    if(!err) {
        connect()
    }
})