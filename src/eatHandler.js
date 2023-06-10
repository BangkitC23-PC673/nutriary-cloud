const pool = require('./db');

// Add eat data to database
const addEatData = (req, res) => {
    const { time_id, food_id, qty, date_time } = req.body;

    pool.query("INSERT INTO eat (time_id, food_id, qty, date_time) VALUES ($1, $2, $3, $4)", [time_id, food_id, qty, date_time], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).send("Eat data added successfully!");
    })
};

// Get all eat data from database
const getAllEatData = (req, res) => {
    pool.query("SELECT * FROM eat", (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

// Get eat data by id
const getEatDataById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM eat WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length) {
            res.status(200).json(results.rows);
        }
        else {
            res.status(404).send("Food data dose not exist!");
        }
    });
};

// Edit eat data by id
const editEatDataById = (req, res) => {
    const id = parseInt(req.params.id);
    const { time_id, food_id, qty, date_time } = req.body;

    pool.query("SELECT * FROM eat WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (!results.rows.length) {
            res.status(404).send("Eat data does not exist!");
        }

        pool.query("UPDATE eat SET time_id = $1, food_id = $2, qty = $3, date_time = $4 WHERE id = $5", [time_id, food_id, qty, date_time, id], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send("Eat data updated successfully!");
        });
    });
};

// Delete eat data by id
const deleteEatDataById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM eat WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (!results.rows.length) {
            res.status(404).send("Eat data does not exist!");
        }

        pool.query("DELETE FROM eat WHERE id = $1", [id], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send("Eat data deleted successfully!");
        })
    });
};

module.exports = {
    addEatData,
    getAllEatData,
    getEatDataById,
    editEatDataById,
    deleteEatDataById,
};