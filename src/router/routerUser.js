const { Router } = require('express');
const userController = require('../controller/userController');
const loginController = require('../controller/loginController');

const router = Router();

router.post('/', userController.createUser);

router.use(loginController.validateToken);

router.get('/', userController.listUser);
router.get('/:id', userController.findUser);

module.exports = router;
