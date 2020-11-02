const Router = require('express').Router()
const { check } = require('express-validator')

const itemMethods = require('./item.controller')

const itemValidator = [
    check('name')
        .notEmpty().withMessage('Name field is required'),
    check('description')
        .notEmpty().withMessage('Description field is required'),
    check('price')
        .notEmpty().withMessage('Price field is required'),
    check('imageUrls')
        .isArray().withMessage('Images are required')
        .notEmpty().withMessage('Name field is required'),
]

Router.post('/item/create', itemValidator, itemMethods.addItem)

Router.post('/item/:itemId/update', itemValidator, itemMethods.editItem)

Router.get('/item/:itemId/delete', itemMethods.deleteItem)

module.exports = Router