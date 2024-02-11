const Router = require('express').Router;

const router = new Router();
const userController = require('../controllers/userController')

router.get('/users', userController.getUsers);
router.post('/registration', userController.registration);
router.post( '/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);
router.post('/checkPwd', userController.checkPwd);


module.exports = router;