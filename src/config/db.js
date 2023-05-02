const { Pool } = require('pg');
const pool = new Pool({
    user: 'irsyad',
    host: '149.129.241.190',
    database: 'irsyad02',
    password: '31cw11m1214'
});

module.exports = pool;