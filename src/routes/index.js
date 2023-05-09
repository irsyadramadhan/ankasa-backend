const express = require('express');
const router = express.Router();
const UsersRoute = require('../routes/usersRoute');
const TicketRoute = require('../routes/ticketRoute')

router.use('/users', UsersRoute);
router.use('/ticket', TicketRoute);

module.exports = router;
