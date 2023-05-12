const Pool =  require('../config/db');

const insertBooking = (data) => {
    const {user_id, ticket_id, subtotal, total} = data;
    return new Promise((resolve, reject) => {
        Pool.query(`INSERT INTO booking (user_id, ticket_id, subtotal, total) VALUES ('${user_id}', ${ticket_id}, ${subtotal}, ${total})`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            };
        });
    });
};

const selectBookingByUserId = (id) => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT booking.id, airline.name, airline.image, ticket.origin_code, ticket.destination_code, ticket.origin_city, ticket.origin_country, ticket.destination_city, ticket.destination_country, ticket.time_takeoff, ticket.time_landing, ticket.flight_duration, ticket.transit, ticket.luggage, ticket.meal, ticket.wifi, ticket.flight_class, booking.paid, booking.insurance, booking.subtotal, booking.total, booking.total_passenger
        FROM booking
        JOIN ticket ON booking.ticket_id = ticket.id
        JOIN airline ON ticket.airline_id = airline.id
        WHERE booking.user_id = '${id}'`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            };
        });
    });
};

const selectBookingById = (id) => {
    return new Promise((resolve, reject) => {
        Pool.query(`SELECT booking.id, airline.name, airline.image, ticket.origin_code, ticket.destination_code, ticket.origin_city, ticket.origin_country, ticket.destination_city, ticket.destination_country, ticket.time_takeoff, ticket.time_landing, ticket.flight_duration, ticket.transit, ticket.luggage, ticket.meal, ticket.wifi, ticket.flight_class, booking.paid, booking.insurance, booking.subtotal, booking.total, booking.total_passenger
        FROM booking
        JOIN ticket ON booking.ticket_id = ticket.id
        JOIN airline ON ticket.airline_id = airline.id
        WHERE booking.id = ${id}`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            };
        });
    });
};

const updateBookingStatus = (id, userId) => {
    return new Promise((resolve, reject) => {
        Pool.query(`UPDATE booking SET paid = 1 WHERE booking.id = ${id} AND user_id = '${userId}'`, (err, result) => {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            };
        });
    });
};

module.exports = {insertBooking, selectBookingByUserId, selectBookingById, updateBookingStatus};
