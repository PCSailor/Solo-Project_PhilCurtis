console.log(new Date().getFullYear() + ' database-pool.js reached');
var pg = require ('pg'); // NOTE: communication of SQL to server
var config = {
  database: 'phi', // NOTE: db name
  host: 'localhost', // NOTE: db location
  port: 5432, // NOTE: database port number
  max: 10, // NOTE: db connections allowed at one time
  idleTimeoutMillis: 30000 // NOTE: connect-to timeout error
};
var pool = new pg.Pool(config);
module.exports = pool;
