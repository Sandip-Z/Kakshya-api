const router = require('express').Router();
const signupController = require('../controller/userController');

router.get('/',signupController.GET_user_ROOT);

module.exports = router;