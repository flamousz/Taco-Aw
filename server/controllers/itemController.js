const {
     Category,
     Item,
     User,
     Ingredient,
     sequelize,
} = require("../models/index");

class ItemController {
     static async deleteItem(req, res, next) {
          try {
               const { id } = req.params;
               const item = await Item.findByPk(id);
               if (!item) {
                    throw {
                         name: "NotFound",
                    };
               }
               await Item.destroy({
                    where: { id },
               });

               res.status(200).json({
                    message: `Menu ${item.name} has been deleted`,
               });
          } catch (err) {
               next(err);
          }
     }

     static async editItem(req, res, next) {
          try {
               const { id } = req.params;

               const {
                    name,
                    description,
                    price,
                    imgUrl,
                    authorId,
                    categoryId,
               } = req.body;
               if (
                    !name ||
                    !description ||
                    !categoryId ||
                    !imgUrl ||
                    !price ||
                    !authorId
               ) {
                    throw { name: "NotFound" };
               }

               const item = await Item.findByPk(id);
               if (!item) {
                    throw {
                         name: "NotFound",
                    };
               }

               await Item.update(
                    {
                         name,
                         description,
                         price,
                         imgUrl,
                         authorId,
                         categoryId
                    },
                    { where: { id } }
               );

               res.status(200).json({
                    message: `Menu ${item.name} has been updated to ${name}`,
               });
          } catch (err) {
               next(err);
          }
     }

     static async postItem(req, res, next) {
          const t = await sequelize.transaction();
          try {
               let {
                    name,
                    description,
                    price,
                    imgUrl,
                    authorId,
                    categoryId,
                    ingredient,
               } = req.body;

               const item = await Item.create(
                    { name, description, price, imgUrl, authorId, categoryId },
                    {
                         transaction: t,
                    }
               );
               ingredient = ingredient.map((el) => {
                    el.itemId = item.id;
                    return el;
               });
               await Ingredient.bulkCreate(ingredient, { transaction: t });
               await t.commit();
               res.status(201).json({
                    message: `${name} has been add to food list`,
               });
          } catch (err) {
               await t.rollback();
               next(err);
          }
     }

     /*

     This code defines an asynchronous function named postItem that handles a POST request to create a new item in a food list application. This function uses the Sequelize ORM (Object-Relational Mapping) library to interact with a PostgreSQL database.

The function first starts a transaction using sequelize.transaction() to ensure that all database operations within the function are executed atomically. If any error occurs during the execution of the function, the transaction will be rolled back to maintain data integrity.

Then, the function extracts data from the request body using destructuring and assigns it to variables. These variables include name, description, price, imgUrl, authorId, categoryId, and an array of ingredient objects.

Next, the function uses Item.create() to create a new item in the database. The method takes an object with properties that match the fields in the Item model, which is defined elsewhere in the application. The transaction option is passed to this method to ensure that the operation is included in the transaction.

the ingredient array is being mapped over using the Array.prototype.map() method. The map() method takes a callback function that is executed for each element in the array.

The callback function takes a single parameter, which represents the current element being processed. This parameter is assigned to the variable el in the code.

Inside the callback function, the itemId property of the current el object is set to the id of the newly created item using item.id. This is done to associate each ingredient with the item it belongs to.

Then, the modified el object is returned from the callback function, which creates a new array of ingredients with the itemId property set to the id of the newly created item.

After the map() method completes, the ingredient variable now contains an array of objects, each with a itemId property that is set to the id of the item that was just created. This modified ingredient array is then passed to Ingredient.bulkCreate() to insert all of the ingredients into the database in a single query.

Finally, the function uses Ingredient.bulkCreate() to insert all of the ingredients into the database in a single query. The transaction option is passed to this method as well to ensure that the operation is included in the transaction.

If everything is successful, the transaction is committed using t.commit(), and the function responds with a JSON object containing a success message and a status code of 201.

If an error occurs at any point during the execution of the function, the transaction is rolled back using t.rollback(), and the error is passed to the next() middleware function using next(err). This middleware function is responsible for handling errors and returning an appropriate response to the client.

     */


     static async getItem(req, res, next) {
          try {
               const items = await Item.findAll({
                    include: [
                         {
                              model: Category,
                              attributes: ["name"],
                         },
                         {
                              model: User,
                              attributes: ["name"],
                         },
                         {
                              model: Ingredient,
                              attributes: ["name"],
                         },
                    ],
                    order: [["createdAt", "DESC"]],
               });

               res.status(200).json(items);
          } catch (err) {
               next(err);
          }
     }

     static async getDetailItem(req, res, next) {
          try {
               const { id } = req.params;
               const item = await Item.findByPk(id);
               if (!item) {
                    throw { name: "NotFound" };
               }
               res.status(200).json(item);
          } catch (err) {
               next(err);
          }
     }
}

module.exports = ItemController;
