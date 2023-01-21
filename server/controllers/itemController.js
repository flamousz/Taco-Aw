const { Category, Item, User, Ingredient, sequelize } = require('../models/index')


class ItemController {
    static async deleteItem(req, res, next) {
        try {
            const {id} = req.params
            const item = await Item.findByPk(id)
            if (!item) {
                throw {
                    name: "NotFound"
                }
            }
            await Item.destroy({
                where: {id}
            })

            res.status(200).json({
                message: `Menu ${item.name} has been deleted`
            })
        } catch (err) {
            next(err)
        }
    }


    static async postItem(req, res, next) {
        const t = await sequelize.transaction();
        try {
            let { name, description, price, imgUrl, authorId, categoryId, ingredient } = req.body

            const item = await Item.create({ name, description, price, imgUrl, authorId, categoryId }, {
                transaction: t
            })
            ingredient = ingredient.map((el) => {
                el.itemId = item.id
                return el
            })
            await Ingredient.bulkCreate(ingredient, { transaction: t })
            await t.commit()
            res.status(201).json({message: 'ok'})


        } catch (err) {
            await t.rollback()
            next(err)
        }
    }

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