const mysql = require('mysql')
const config = require('../config');


const connection = mysql.createConnection({
    host: config.dbServer,
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase
})

connection.connect((error) => {
    if (error) {
        switch (error.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.log('Database connection was closed.');
                break;
            case 'ER_CON_COUNT_ERROR':
                console.log('Database has to many connections.');
                break;
            case 'ECONNREFUSED':
                console.log('Database connection was refused.');
                break;
            default:
                console.log('Database is connected')
                break;
        }
    } else {
        console.log('Database is connected')
    }
    return;
});

// connection.query('SELECT * FROM books', (error, results, fields) => {
//     if (error) throw error;
//     console.log(results)
//   });
//   connection.end()


module.exports = connection