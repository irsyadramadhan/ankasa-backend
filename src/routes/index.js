const express = require('express');
const router = express.Router();
const UsersRoute = require('../routes/usersRoute');
const TicketRoute = require('../routes/ticketRoute');
const BookingRoute = require('../routes/bookingRoute');

router.use('/users', UsersRoute);
router.use('/ticket', TicketRoute);
router.use('/booking', BookingRoute);

module.exports = router;
