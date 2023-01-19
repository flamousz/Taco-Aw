const { Category } = require('../models/index')

class CategoryController {
    static async getCategory(req, res, next) {
        try {
            const category = await Category.findAll({
                order: [['createdAt', 'DESC']]
            })

            res.status(200).json(category)
        } catch (err) {
            next(err)
        }
    }


}


module.exports = CategoryController