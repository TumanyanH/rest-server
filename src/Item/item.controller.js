const { validationResult } = require('express-validator')
const createError = require('http-errors')

const Item = require('./item.model')

module.exports = {
    addItem : async (req, res, next) => {
        const userId = req.body.userId
        const name = req.body.name
        const description = req.body.description
        const imageUrls = req.body.imageUrls
        const price = req.body.price

        const errors = validationResult(req)

        try {
            if(errors.isEmpty()) {
                const newItem = await Item.create({
                    userId : userId,
                    name : name,
                    description : description,
                    imageUrls : imageUrls,
                    price : price.toFixed(2)
                })
                return res.status(200).json({
                    result : {
                        data : {
                            item : newItem
                        }
                    }
                })
            }
            throw createError(400, errors)
        } catch (err) {
            next(err)
        }
    },

    editItem : async (req, res, next) => {
        const itemId = req.params.itemId
        const name = req.body.name
        const description = req.body.description
        const imageUrls = req.body.imageUrls
        const price = req.body.price

        const errors = validationResult(req)

        try {
            if(errors.isEmpty()) {
                const item = await Item.findByIdAndUpdate(itemId, {
                    name : name,
                    description : description,
                    imageUrls : imageUrls,
                    price : price
                })
                return res.status(204).json({
                    result : {
                        data : {
                            item : item
                        }
                    }
                })
            }   
            throw createError(400, errors)
        } catch (err) {
            next(err)
        }
    },

    deleteItem : async (req, res, next) => {
        const itemId = req.params.itemId
        
        try {
            await Item.findByIdAndRemove(itemId)
            return res.status(204).json({
                result : {
                    data : {
                        success : "ok"
                    }
                }
            })
        } catch (err) {
            next(err)
        }
    }
}