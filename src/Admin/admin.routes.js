const Router = require('express').Router()
const adminMethods = require('./admin.controller')

Router.post('/admin/login', adminMethods.login)

module.exports = Router