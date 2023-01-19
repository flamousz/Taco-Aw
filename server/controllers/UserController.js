const { compareHash } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models/index')


class UserController {
    static async register(req, res, next) {
        try {
            let { email, password, phoneNumber, address, username } = req.body
            const role = 'admin'
            let userRegister = await User.create({ email, password, role, phoneNumber, address, username })
            res.status(201).json({
                message: `user with id ${userRegister.id} and email ${userRegister.email} has been created`
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            let { email, password } = req.body
            if (!email || !password) {
                throw ({name: 'EmailOrPasswordRequired'})
            }

            let user = await User.findOne({ where: {email} })
            if (!user) {
                throw ({name: 'InvalidEmailOrPassword'})
            }

            let compared = compareHash(password, user.password)
            if (!compared) {
                throw ({name: 'InvalidEmailOrPassword'})
            }

            let payload = {
                id: user.id
            }
            let id = user.id
            let role = user.role
            let access_token = createToken(payload)
            res.status(200).json({ access_token, email, role, id })
        } catch (err) {
            next(err)
        }
    }

}



module.exports = UserController