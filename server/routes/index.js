const express = require('express')
const {authentication} = require('../middlewares/auth')
const router = express.Router()
const userRouter = require('./user')

router.use('/users', userRouter)
// router.use(authentication)



module.exports = router