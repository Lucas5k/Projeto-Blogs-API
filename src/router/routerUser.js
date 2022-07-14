const { Router } = require('express');
const userController = require('../controller/userController');
const loginController = require('../controller/loginController');

const router = Router();

router.post('/', userController.createUser);
router.get('/', loginController.validateToken, userController.listUser);

module.exports = router;
