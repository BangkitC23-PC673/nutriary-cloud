const { Router } = require('express');
const eatHandler = require('./eatHandler');
const eatRouter = Router();

// Eat routes
eatRouter.post('/eat', eatHandler.addEatData);
eatRouter.get('/eat', eatHandler.getAllEatData);
eatRouter.get('/eat/:id', eatHandler.getEatDataById);
eatRouter.put('/eat/:id', eatHandler.editEatDataById);
eatRouter.delete('/eat/:id', eatHandler.deleteEatDataById);

module.exports = eatRouter;