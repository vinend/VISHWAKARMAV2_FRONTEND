const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "abshar27",
    host: "localhost",
    port: 5173,
    database: tryerror,
})

module.exports = pool;