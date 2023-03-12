const express = require('express')
const {authentication} = require('../middlewares/auth')
const categoryRouter = require('./category')
const ingredientRouter = require('./ingredient')
const itemRouter = require('./item')
const router = express.Router()
const userRouter = require('./user')

router.use('/users', userRouter)
router.use('/items', itemRouter)
router.use('/categories', categoryRouter)
router.use('/ingredients', ingredientRouter)
// router.use(authentication)



module.exports = router


/*

This code exports a router object that sets up various routes for different endpoints in a Node.js application with the Express.js framework.

First, it imports the express module and other router modules, including categoryRouter, ingredientRouter, itemRouter, and userRouter. Each of these router modules defines routes for their respective endpoints in the application.

Next, it creates an instance of the express.Router() object and assigns it to the router variable.

Then, it uses the router.use() method to specify the base URL path for each of the imported router modules, allowing them to handle requests for their respective endpoints. For example, the userRouter handles requests for the /users endpoint, while the itemRouter handles requests for the /items endpoint.

By using router.use() instead of router.get() or router.post(), each imported router module can define its own routes and handlers for different HTTP methods (e.g., GET, POST, PUT, DELETE) at their respective endpoints. This allows for more modular and organized code.

Finally, the code exports the router object for use in other modules in the application. This allows the routes defined in this module to be added to the main app.js file using app.use().

*/