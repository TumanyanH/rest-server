const Router = require('express').Router()
const userMethods = require('./user.controller')
const { check } = require('express-validator')
const User = require('./user.model')

const loginRules = [
    check('email').notEmpty().isEmail().normalizeEmail().withMessage('Email field is required and must be type of email'),
    check('password').isLength(8).withMessage('Password field is required and must include at least 8 characters')
];

const registerRules = [
    check('fullName').notEmpty().withMessage('Name field is required'),
    check('email').notEmpty().isEmail().normalizeEmail().withMessage('Email field is required and must be type of email'),
    check('email').custom((value, {req}) => {
        return User.findOne({ email : value })
            .then(result => {
                if(result) {
                    return Promise.reject('User with this email is already exists')
                }
            })
    }),
    check('password').isLength(8).withMessage('Password field is required and must include at least 8 characters')
]

Router.post('/login', loginRules, userMethods.login)

Router.post('/register', registerRules, userMethods.register)

Router.get('/activate/:token', userMethods.activate)

module.exports = Router