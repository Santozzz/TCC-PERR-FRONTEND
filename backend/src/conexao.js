import mysql from 'backend/node_modules/mysql/index.js'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'db_perr',
});

connection.connect((err) => {
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    } else {
        console.log('Conectado ao banco de dados!');
    }
});

export default connection;