const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'db_perr',
})

connection.connect((err) => {
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
})

$query = "SELECT * FROM userinfo";

connection.query($query, function(err, rows, fields){
    if(err){
        console.log("An error occured!!!!");
        return;
    }

    console.log("Deu certo!!!" , rows);
})

connection.end(function(){
    console.log("Connection closed!");
})