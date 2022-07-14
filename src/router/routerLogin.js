const { Router } = require('express');
const loginController = require('../controller/loginController');

const router = Router();

router.post('/', loginController.create);

module.exports = router;