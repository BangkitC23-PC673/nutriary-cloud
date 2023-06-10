/*const pool = require('./db');
const md5 = require('md5');

const register = (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = md5(password);

    //Check if email exists
    pool.query("SELECT s FROM users s WHERE s.username = $1 OR s.email = $2", [username, email], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length) {
            res.send("Username or Email already exist!");
        };

        // Add users to database
        pool.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)", [username, email, hashedPassword], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(201).send("User created successfully!");
        });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = md5(password);

    pool.query('SELECT * FROM users WHERE email = $1 AND password = $2', [email, hashedPassword], (error, results) => {
        if (error) {
          throw error
        }
        if (results.rows.length) {
          res.status(200).send("Selamat datang " + results.rows[0].username);
        } 
        else {
           res.status(404).send('Incorrect Username and/or Password!');
        }			
        res.end();
    });
};

const getAllUsers = (req, res) => {
    pool.query("SELECT * FROM users", (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (results.rows.length) {
            res.status(200).json(results.rows);
        }
        else {
            res.status(404).send("User does not exist!");
        }
    });
};

const editUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const { username, email, password } = req.body;
    const hashedPassword = md5(password);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (!results.rows.length) {
            res.status(404).send("User does not exist!");
        }

        pool.query("UPDATE users SET username = $1, email = $2, password = $3 WHERE id = $4", [username, email, hashedPassword, id], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send("User updated successfully!");
        });
    });
};

const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
        if (error) {
            throw error;
        }
        if (!results.rows.length) {
            res.status(404).send("User does not exist");
        }

        pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).send("User deleted successfully");
        })
    });
};

module.exports = {
    register,
    login,
    getAllUsers,
    getUserById,
    editUserById,
    deleteUserById,
};*/