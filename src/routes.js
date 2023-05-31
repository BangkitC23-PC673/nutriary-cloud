const { Router } = require('express');
const handler = require('./handler');
const router = Router();

router.get("/", handler.getUsers);
router.post("/", handler.addUser);
router.get("/:id", handler.getUsersById);
router.put("/:id", handler.editUserById);
router.delete("/:id", handler.deleteUserById);

module.exports = router;