const Pool = require('../config/db');

const createUser = (data) => {
    const {id, fullname, email, password, otp} = data;
    return new Promise((resolve, reject) => {
        Pool.query(`INSERT INTO users (id, fullname, email, pass, otp) VALUES ('${id}', '${fullname}', '${email}', '${password}', '${otp}')`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
};

const findUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT * FROM users WHERE email = '${email}'`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
};

module.exports = {createUser, findUserByEmail};