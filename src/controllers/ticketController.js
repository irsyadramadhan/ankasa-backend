const {selectTicket, selectTicketById} = require('../models/ticketModel');

const ticketController = {
    getTicket: async (req, res) => {
        let {searchBy, searchValue, sortValue, limit} = req.query;
        let data = {
            searchBy: searchBy || 'destination_country',
            searchValue: searchValue || '',
        };
        const response = await selectTicket(data);
        if (!response) return res.status(404).json({status: 404, message: 'get ticket failed'});
        return res.status(200).json({status: 200, message: 'get data success', data: response.rows})
    },
    getTicketById: async (req, res) => {
        let id = req.params.id;
        const response = await selectTicketById(id);
        if (!response) return res.status(404).json({status: 404, message: 'get ticket by id failed'});
        return res.status(200).json({stattus: 200, message: 'get data success', data: response.rows})
    }
};

module.exports = ticketController;
