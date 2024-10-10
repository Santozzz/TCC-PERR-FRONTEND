import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Da28360989',
    database: 'db_perr'
})

export default conexao
