const { v4: uuidv4 } = require('uuid');
const argon2 = require('argon2');
const generateToken = require('../helpers/generateToken');
const {createUser, findUserByEmail} = require('../models/usersModel');

const UsersController = {
    registerUser: async (req, res) => {
        if (!req.body.fullname || !req.body.email || !req.body.password) {
            return res.status(404).json({status: 404, message: 'please input fullname, email, and password correctly!'});
        }
        let {rows:[users]} = await findUserByEmail(req.body.email);
        if (users) {
            return res.status(404).json({status: 404, message: 'email address is already used'});
        }
        let id = uuidv4();
        let otp = Math.floor((Math.random()*1000000)+1);
        let password = await argon2.hash(req.body.password);
        let password1 = req.body.password;
        let password2 = req.body.confirm_password;
        if (password1 !== password2) {
            return res.status(404).json({status: 404, message: 'confirm password did not match'});
        }
        let data = {
            id,
            fullname: req.body.fullname,
            email: req.body.email,
            password,
            otp,
        };
        const response = await createUser(data);
        if (!response) return res.status(404).json({status: 404, message: 'register failed'});
        if (response) return res.status(201).json({status: 201, message: 'register success'});
    },
    loginUser: async (req, res) => {
        if (!req.body.email || !req.body.password) return res.status(404).json({status: 404, message: 'please input email and password correctly!'});
        let {rows:[users]} =  await findUserByEmail(req.body.email);
        if (!users) return res.status(404).json({status: 404, message: 'can not login, user is not registered'});
        let matchPassword = await argon2.verify(users.pass, req.body.password);
        if (matchPassword) {
            let data = users;
            delete data.password;
            data.token = generateToken(data);
            return res.status(201).json({status: 201, message: 'login success', data: users});
        } else {
            return res.status(404).json({status: 404, message: 'incorrect password'});
        }
    }
}

module.exports = UsersController;
