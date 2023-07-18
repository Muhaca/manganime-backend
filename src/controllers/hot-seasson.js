const config = require('../configs/database');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error', (err) => {
    console.error(err);
});

module.exports = {
    // Ambil data semua hot seasson
    getDataHotSeasson(req, res) {
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM hot_seasson;
                `
                , function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data!',
                        data: results
                    });
                });
            connection.release();
        });
    },
    // Ambil data hot seasson berdasarkan ID
    getDataHotSeassonByID(req, res) {
        let id = req.params.sub_id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                 SELECT * FROM hot_seasson WHERE sub_id = ?;
                `
                , [id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil ambil data!',
                        data: results
                    });
                });
            connection.release();
        });
    },
    // Simpan data Hot Seasson
    addDataHotSeasson(req, res) {
        let data = {
            "sub_id": req.body.sub_id,
            "sub_name": req.body.sub_name,
            "sub_banner": req.body.sub_banner,
            "season": req.body.season,
            "rilis": req.body.rilis
        };
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO hot_seasson SET ?;
                `
                , [data],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil tambah data!',
                    });
                });
            connection.release();
        });
    },
    // Update data karyawan
    editDataHotSeasson(req, res) {
        let data = {
            sub_id: req.body.sub_id,
            sub_name: req.body.sub_name,
            sub_banner: req.body.sub_banner,
            season: req.body.season,
            rilis: req.body.rilis
        };
        let id = req.body.sub_id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE hot_seasson SET ? WHERE sub_id = ?;
                `
                , [data, id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil edit data!',
                    });
                });
            connection.release();
        });
    },
    // Delete data karyawan
    deleteDataHotSeasson(req, res) {
        let id = req.body.sub_id;
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM hot_seasson WHERE sub_id = ?;
                `
                , [id],
                function (error, results) {
                    if (error) throw error;
                    res.send({
                        success: true,
                        message: 'Berhasil hapus data!'
                    });
                });
            connection.release();
        });
    }
};