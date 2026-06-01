const express = require ('express');
const router = express.Route();

const UserController = require ('../controllers/user.controller');

router.post ('/', UserController.createUser);
router.get ('/', UserController.getAllUsers);
router.get ('/:id', UserController.getUserById);
router.put ('/:id', UserController.updateUser);
router.delete('/:id',UserController.deleteUser);

module.exports = router;