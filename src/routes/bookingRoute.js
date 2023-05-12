const express = require('express');
const router = express.Router();
const {postBooking, getBookingByUserId, getBookingById, putBookingStatus} = require('../controllers/bookingController');
const {protect} = require('../middleware/routeProtector');

router.post('/', protect, postBooking);
router.get('/mybooking', protect, getBookingByUserId);
router.get('/:id', protect, getBookingById);
router.put('/:id', protect, putBookingStatus);

module.exports = router;
