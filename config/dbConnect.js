const mongoose = require('mongoose')

const connect = () => {
    mongoose
        .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(res => {
            console.log('connected');
        })
        .catch(err => {
            if(err) {
                console.log(error);
                connect()
            }
        })
}

mongoose.connection.on('disconnect', connect)

module.exports = { connect }