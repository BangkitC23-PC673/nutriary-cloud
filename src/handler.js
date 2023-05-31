const pool = require('./db');

const getUsers = (req, res) => {
    pool.query("SELECT * FROM users", (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUsersById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { username, email, password } = req.body;

    //Check if email exists
    pool.query("SELECT s FROM users s WHERE s.email = $1", [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exist");
        };

        // Add users to database
        pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, password], (error, results) => {
            if (error) throw error;
            res.status(201).send("User created successfully!");
        })
    });
};

const editUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, email, password } = req.body;

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist");
        }

        pool.query("UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4", [username, email, password, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User updated successfully");
        });
    });
};

const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist");
        }

        pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully");
        })
    });
};

module.exports = {
    getUsers,
    getUsersById,
    addUser,
    editUserById,
    deleteUserById,
};