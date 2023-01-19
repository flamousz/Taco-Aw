const { Category, Item, User, Ingredient } = require('../models/index')

class ItemController {
    static async getItem(req, res, next) {
        try {
            const items = await Item.findAll({
                include: [
                    {
                        model: Category,
                        attributes: ['name']
                    },
                    {
                        model: User,
                        attributes: ['name']
                    },
                    {
                        model: Ingredient,
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

    static async getDetailItem(req, res, next) {
        try {
            const {id} = req.params
            const item = await Item.findByPk(id)
            if (!item) {
                throw {name: 'NotFound'}
            }
            res.status(200).json(item)
        } catch (err) {
            next(err)
        }
    }
}


module.exports = ItemController