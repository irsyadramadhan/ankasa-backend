const Pool =  require('../config/db');

const selectTicket = (data) => {
    let {searchBy, searchValue, sortValue, limit} = data;
    return Pool.query(
        `SELECT airline.name, airline.image, ticket.id, ticket.origin_code, ticket.destination_code, ticket.origin_city, ticket.origin_country, ticket.destination_city, ticket.destination_country, ticket.time_takeoff, ticket.time_landing, ticket.flight_duration, ticket.transit, ticket.luggage, ticket.meal, ticket.wifi, ticket.price, ticket.flight_class
        FROM ticket
        JOIN airline ON ticket.airline_id = airline.id
        WHERE ticket.${searchBy} ILIKE '%${searchValue}%'
        ORDER BY ticket.price ${sortValue}
        LIMIT ${limit};`
    );
};

const selectTicketById = (id) => {
    return Pool.query(
        `SELECT airline.name, airline.image, ticket.origin_code, ticket.destination_code, ticket.origin_city, ticket.origin_country, ticket.destination_city, ticket.destination_country, ticket.time_takeoff, ticket.time_landing, ticket.flight_duration, ticket.transit, ticket.luggage, ticket.meal, ticket.wifi, ticket.price, ticket.flight_class
        FROM ticket
        JOIN airline ON ticket.airline_id = airline.id
        WHERE ticket.id = ${id};`
    );
};

module.exports = {selectTicket, selectTicketById};
