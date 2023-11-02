var mysql = require('mysql');


//koneksi
const koneksi = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e_commerce",
});

koneksi.connect((error) => {
    if (error) throw error;
    console.log("Koneksi Berhasil")
});

module.exports = koneksi;