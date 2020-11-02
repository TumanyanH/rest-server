const Router = require('express').Router()
const subscriberMethods = require('./subscriber.controller')
const { check } = require('express-validator')

const subscribeValidator = [
    check('email')
        .notEmpty().withMessage('Email field is required')
        .normalizeEmail()
        .isEmail().withMessage('Email field must be type of email'),
]

Router.post('/subscribe', subscribeValidator, subscriberMethods.addEmail)

module.exports = Router