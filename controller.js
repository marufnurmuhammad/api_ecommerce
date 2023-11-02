'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
    response.ok("API Running", res);
}

//tampil Produk
exports.tampilProduk = function(req, res) {
    connection.query('SELECT * FROM produk', function(error, rows, fields) {
        if (error) {
            console.log(error);
            response.error("Internal Server Error", res);
        } else {
            response.ok(rows, res);
        }
    });
};