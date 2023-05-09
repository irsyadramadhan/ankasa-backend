const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUserById} = require('../controllers/usersController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);

module.exports = router;
