const { User, Category, Item } = require('../models/index')

class ItemController {
    static async getItem(req, res, next) {
        try {
            const items = await Item.findAll({
                include: [
                    {
                        model: Category,
                        attributes: ['name']
                    }
                ],
                order: [['createdAt', 'DESC']]
            })

            res.status(200).json(items)
        } catch (err) {
            next(err)
        }
    }
}


module.exports = ItemController