const jwt = require('jsonwebtoken')
let secret = process.env.JWT_SECRET

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, secret)
    },
    decodedToken: (token) => {
        return jwt.verify(token, secret)
    }
}

/*
a Node.js module that exports two functions for working with JSON Web Tokens (JWTs): createToken and decodedToken.

The jsonwebtoken module is required, and the secret variable is set to the value of the JWT_SECRET environment variable, which is expected to contain a secret key that will be used to sign and verify JWTs.

createToken takes a payload object as an argument and returns a new JWT signed with the secret key. The payload object contains the data that will be encoded in the JWT.

decodedToken takes a JWT string as an argument and returns the decoded payload object if the token is valid and has not been tampered with. If the token is invalid, jsonwebtoken will throw an error.

This module is useful for applications that require secure authentication and authorization mechanisms, such as web applications or APIs. JWTs can be used to store user session information or to grant access to protected resources.

*/