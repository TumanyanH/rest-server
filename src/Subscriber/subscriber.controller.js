const { validationResult } = require('express-validator')
const createError = require('http-errors')

const Subscriber = require('./subscriber.model')

module.exports = {
    addEmail : async (req, res, next) => {
        const email = req.body.email

        const errors = validationResult(req)

        try {
            if(errors.isEmpty()) {
                await Subscriber.create({
                    email : email
                })
                return res.status(200).json({
                    result : {
                        data : {
                            email : email
                        }
                    }
                })
            }
            throw createError(400, errors)
        } catch(err) {
            next(err)
        }
    }
}