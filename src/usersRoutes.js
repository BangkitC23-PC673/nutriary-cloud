/*const { Router } = require('express');
const usersHandler = require('./usersHandler');
const usersRouter = Router();

// Users routes
//usersRouter.post("/", usersHandler.addUser);
usersRouter.post("/users/register", usersHandler.register);
usersRouter.post("/users/login", usersHandler.login);
usersRouter.get("/users", usersHandler.getAllUsers);
usersRouter.get("/users/:id", usersHandler.getUserById);
usersRouter.put("/users/:id", usersHandler.editUserById);
usersRouter.delete("/users/:id", usersHandler.deleteUserById);

module.exports = usersRouter;*/