const User = require('./user.model')
const bcrypt = require('bcryptjs')
const createError = require('http-errors')
const generator = require('../../libs/generator')
const mailer = require('../../libs/mailer')
const { validationResult } = require('express-validator')

module.exports = {
    register : async (req, res, next) => {
        const fullName = req.body.fullName
        const email = req.body.email
        const password = req.body.password

        const errors = validationResult(req)
        try {
            const token = await generator.generateToken()
            const mailSent = await mailer.sendConfirmationMail(email, token)
            
            if (errors.isEmpty()) {
                const hashedPassword = await bcrypt.hash(password, 12)
                const user = await User.create({
                    fullName: fullName,
                    email: email,
                    password: hashedPassword,
                    token: token
                })

                return res.status(201).json({
                    result: {
                        data: {
                            user: {
                                fullName: user.fullName,
                                email: user.email,
                            }
                        }
                    }
                })
            } else {
                throw createError(400, errors.array())
            }
            
        } catch(err) {
            next(err)
        }
    },

    activate : async (req, res, next) => {
        const token = req.params.token

        try {
            const user = await User.findOne({ token : token })
            if(user && !user.isActive) {
                user.isActive = true
                await user.save()
                return res.status(201).json({
                    result: {
                        data: {
                            message: "User is activated"
                        }
                    }
                })
            } else {
                throw createError(404, "Not found")
            }
        } catch(err) {
            next(err)
        }
    },

    login : async (req, res, next) => {
        const email = req.body.email
        const password = req.body.password
    
        try {
            const user = await User.findOne({ email : email })
            const hashMatched = await bcrypt.compare(password, user.password)
            if(hashMatched) {
                return res.status(201).json({
                    result: {
                        data: {
                            user: {
                                fullName: user.fullName,
                                email: user.email,
                            }
                        }
                    }
                })
            }
            throw createError(401, 'Wrong login/password')
        } catch(err) {
            next(err)
        }
    }
}