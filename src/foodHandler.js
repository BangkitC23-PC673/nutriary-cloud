const pool = require('./db');

const addFood = (req, res) => {
    const { user_id, time_id, food_id, qty, eating_time } = req.body;

    // Add users to database
    pool.query("INSERT INTO eat_history (user_id, time_id, food_id, qty, eating_time) VALUES ($1, $2, $3, $4, $5)", [user_id, time_id, food_id, qty, eating_time], (error, results) => {
        if (error) throw error;
        res.status(201).send("Food added successfully!");
    })
};

const getAllFoods = (req, res) => {
    pool.query("SELECT * FROM eat_history", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getFoodById = (req, res) => {
    const history_id = parseInt(req.params.id);
    pool.query("SELECT * FROM eat_history WHERE id = $1", [history_id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const editFoodById = (req, res) => {
    const history_id = parseInt(req.params.id);
    const { user_id, time_id, food_id, qty, eating_time } = req.body;

    pool.query("SELECT * FROM eat_history WHERE id = $1", [history_id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("Food does not exist");
        }

        pool.query("UPDATE eat_history SET user_id = $1, time_id = $2, food_id = $3, qty = $4, eating_time = $5 WHERE id = $6", [user_id, time_id, food_id, qty, eating_time, history_id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Food updated successfully");
        });
    });
};

const deleteFoodById = (req, res) => {
    const history_id = parseInt(req.params.id);

    pool.query("SELECT * FROM eat_history WHERE id = $1", [history_id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("Food does not exist");
        }

        pool.query("DELETE FROM eat_history WHERE id = $1", [history_id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Food deleted successfully");
        })
    });
};

module.exports = {
    addFood,
    getAllFoods,
    getFoodById,
    editFoodById,
    deleteFoodById,
};