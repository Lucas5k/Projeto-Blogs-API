const { Router } = require('express');
const loginController = require('../controller/loginController');
const blogPostController = require('../controller/blogPostController');

const router = Router();

router.use(loginController.validateToken);

router.get('/', blogPostController.listBlog);

module.exports = router;