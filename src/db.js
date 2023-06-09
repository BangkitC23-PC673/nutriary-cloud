const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    host: "104.197.135.20",
    database:"nutriary",
    password: "postgres",
    port: 5432,
});

module.exports = pool;