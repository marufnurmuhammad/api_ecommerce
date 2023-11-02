var mysql = require('mysql');

//koneksi
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e_commerce",
});

// conn.connect((error) => {
//     if (error) throw error;
//     console.log("Koneksi Berhasil");
// });



module.exports = conn;