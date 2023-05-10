const {insertBooking, selectBookingByUserId, selectBookingById} = require('../models/bookingModel');

const bookingController = {
    postBooking: async (req, res) => {
        let data = {};
        data.user_id = req.payload.id; //<--------
        data.ticket_id = req.body.ticket_id;
        data.subtotal = req.body.subtotal;
        data.total = req.body.subtotal + 5;

        let response = await insertBooking(data);
        if (!response) return res.status(404).json({status: 404, message: "failed"});
        if (response) return res.status(201).json({status: 201, message: "success"});
    },
    getBookingByUserId: async (req, res) => {
        let id = req.payload.id;
        let response = await selectBookingByUserId(id);
        if (!response) return res.status(404).json({status: 404, message: "failed"});
        if (response) return res.status(201).json({status: 201, message: "success", data: response.rows});
    },
    getBookingById: async (req, res) => {
        let id = req.params.id;
        let response = await selectBookingById(id);
        if (!response) return res.status(404).json({status: 404, message: "failed"});
        if (response) return res.status(201).json({status: 201, message: "success", data: response.rows});
    }
}

module.exports = bookingController;
