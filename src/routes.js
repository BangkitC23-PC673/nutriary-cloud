const { Router } = require('express');
const usersHandler = require('./userHandler');
const foodHandler = require('./foodHandler')
const router = Router();

// Users handler
router.post("/", usersHandler.addUser);
router.get("/", usersHandler.getAllUsers);
router.get("/:id", usersHandler.getUserById);
router.put("/:id", usersHandler.editUserById);
router.delete("/:id", usersHandler.deleteUserById);

// Food handler
router.post('/', foodHandler.addFood);
router.get('/', foodHandler.getAllFoods);
router.get('/', foodHandler.getFoodById);
router.put('/', foodHandler.editFoodById);
router.delete('/', foodHandler.deleteFoodById);

module.exports = router;