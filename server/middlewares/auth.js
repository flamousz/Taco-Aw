const { decodedToken } = require('../helpers/jwt')
const { User } = require('../models/index')

async function authentication(req, res, next) {
    try {
        let {access_token} = req.headers
        if (!access_token) {
            throw {name: 'Unauthenticated'}
        }
        let payload = decodedToken(access_token) // JWSWebTokenError
        if (!payload) {
            throw {name: 'JWSWebTokenError'}
        }

        let user = await User.findByPk(payload.id)
        if (!user) {
            throw {name: 'Unauthenticated'}
        }
        req.user = {
            id: user.id,
            role: user.role,
            username: user.username
        }
        next()
    } catch (err) {
        next(err)
    }
}


module.exports = {authentication}

/*

a Node.js module that exports a middleware function called authentication. This middleware is designed to verify the authenticity of a JSON Web Token (JWT) included in a request header, and then check if the user associated with the token is authorized to access the requested resource.

The decodedToken function is imported from a separate module jwt.js that is expected to contain the functions for encoding and decoding the JWTs. The User model is also imported from a separate module index.js, which is expected to contain the definitions of all database models used in the application.

Inside the authentication function, the middleware first checks if the JWT is present in the request header. If it's not present, an error is thrown with a name property set to 'Unauthenticated'.

If the JWT is present, it is decoded using the decodedToken function, which returns the payload object contained in the JWT. If decoding fails due to any reason, an error is thrown with a name property set to 'JWSWebTokenError'.

If the JWT is successfully decoded, the middleware attempts to retrieve the corresponding user record from the database using the User.findByPk() method, passing the id value from the JWT payload as an argument. If the user is not found, an error is thrown with a name property set to 'Unauthenticated'.

If the user is found, the middleware attaches an object to the req object, containing the id, role, and username properties of the user retrieved from the database. Finally, next() is called to pass control to the next middleware or route handler.

This middleware function can be used to protect routes or endpoints that require authentication and authorization.

*/