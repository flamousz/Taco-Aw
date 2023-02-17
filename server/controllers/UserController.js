const { compareHash } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models/index')


class UserController {
    static async register(req, res, next) {
        try {
            let { email, password, phoneNumber, address, name } = req.body
            const role = 'admin'
            let userRegister = await User.create({ email, password, role, phoneNumber, address, name })
            res.status(201).json({
                message: `Admin with name ${userRegister.name} and email ${userRegister.email} has been created`
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw ({name: 'EmailOrPasswordRequired'})
            }

            const user = await User.findOne({ where: {email} })
            if (!user) {
                throw ({name: 'InvalidEmailOrPassword'})
            }

            const compared = compareHash(password, user.password)
            if (!compared) {
                throw ({name: 'InvalidEmailOrPassword'})
            }

            const payload = {
                id: user.id,
                email
            }
            const id = user.id
            const role = user.role
            const access_token = createToken(payload)
            res.status(200).json({ access_token, email, role, id })
        } catch (err) {
            console.log(err);
            next(err)
        }
    }

}



module.exports = UserController