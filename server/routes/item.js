const express = require('express')
const ItemController = require('../controllers/itemController')
const itemRouter = express.Router()


itemRouter.get('/', ItemController.getItem)
itemRouter.get('/:id', ItemController.getDetailItem)


module.exports = itemRouter