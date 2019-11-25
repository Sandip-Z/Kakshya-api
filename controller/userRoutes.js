const router = require('express').Router();
const userController = require('../controller/userController');

router.get('/', userController.GET_user_ROOT);

module.exports = router;
