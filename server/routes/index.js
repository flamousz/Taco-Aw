const express = require('express')
const {authentication} = require('../middlewares/auth')
const itemRouter = require('./item')
const router = express.Router()
const userRouter = require('./user')

router.use('/users', userRouter)
router.use('/items', itemRouter)
// router.use(authentication)



module.exports = router