const Router = require('express').Router;

const router = new Router();
const userController = require('../controllers/userController')

router.get('/users', userController.getUsers);

module.exports = router;