const { Router } = require('express');
const loginController = require('../controller/loginController');
const categoryController = require('../controller/categoryController');

const router = Router();

router.use(loginController.validateToken);

router.get('/', categoryController.listCategory);

module.exports = router;
