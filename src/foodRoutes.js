const { Router } = require('express');
const foodHandler = require('./foodHandler');
const foodRouter = Router();

// Food handler
foodRouter.post('/', foodHandler.addFood);
foodRouter.get('/', foodHandler.getAllFoods);
foodRouter.get('/:id', foodHandler.getFoodById);
foodRouter.put('/:id', foodHandler.editFoodById);
foodRouter.delete('/:id', foodHandler.deleteFoodById);

module.exports = foodRouter;