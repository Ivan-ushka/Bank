const Router = require('express').Router;

const router = new Router();
const userController = require('../controllers/userController')

router.get('/users', userController.getUsers);
router.post('/registration', userController.registration)

module.exports = router;