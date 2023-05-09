const express = require('express');
const router = express.Router();
const {getTicket, getTicketById} = require('../controllers/ticketController');

router.get('/', getTicket);
router.get('/:id', getTicketById);

module.exports = router;
