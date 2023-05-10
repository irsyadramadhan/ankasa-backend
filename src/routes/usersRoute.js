const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUserById, putUserData} = require('../controllers/usersController');
const {protect} = require('../middleware/routeProtector')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', getUserById);
router.put('/:id', protect, putUserData)

module.exports = router;
