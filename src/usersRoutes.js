/*const { Router } = require('express');
const usersHandler = require('./usersHandler');
const usersRouter = Router();

// Users routes
//usersRouter.post("/", usersHandler.addUser);
usersRouter.post("/register", usersHandler.register);
usersRouter.post("/login", usersHandler.login);
usersRouter.get("/", usersHandler.getAllUsers);
usersRouter.get("/:id", usersHandler.getUserById);
usersRouter.put("/:id", usersHandler.editUserById);
usersRouter.delete("/:id", usersHandler.deleteUserById);

module.exports = usersRouter;*/