const jwt = require('jsonwebtoken');

let key = process.env.JWT_KEY;

const protect = (req, res, next) => {
    try {
        let token;
        if (req.headers.authorization) {
            let auth = req.headers.authorization;
            // console.log(auth);
            token = auth.split(' ')[1];
            // console.log(token);
            let decode = jwt.verify(token, key);
            req.payload = decode;
            next();
        } else {
            res.status(404).json({status: 404, messange: 'cant access'});
        }
    } catch (error) {
        console.log('error: ', error);
        if (error && error.name == 'JsonWebTokenError') {
            res.status(404).json({status: 404, messange: 'invalid token'});
        } else if (error && error.name == 'TokenExpireError') {
            res.status(404).json({status: 404, messange: 'token expired'});
        } else {
            res.status(404).json({status: 404, messange: 'token not active'});
        }
    }
}

module.exports = {protect};
