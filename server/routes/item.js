const express = require('express')
const ItemController = require('../controllers/itemController')
const itemRouter = express.Router()


itemRouter.get('/', ItemController.getItem)


module.exports = itemRouter