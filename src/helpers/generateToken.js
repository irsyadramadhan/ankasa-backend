const jwt = require('jsonwebtoken');

let key = '12345678';

const generateToken = (payload) => {
    const verifyOpts = {
        expiresIn: '30d'
    }
    const token = jwt.sign(payload, key, verifyOpts);
    return token;
}

module.exports = generateToken;
