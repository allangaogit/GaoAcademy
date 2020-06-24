const { Pool } = require("pg");

const pool  = new Pool({
    user: "postgres",
    password: "7sevens",
    host: "localhost",
    port: 5432,
    database: "gaoacademy"
});

module.exports = pool;