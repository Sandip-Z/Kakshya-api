const router = require('express').Router();
const signupController = require('../Controller/signupController');

router.get('/', signupController.GET_signup_ROOT);
router.post('/', signupController.POST_signup_ROOT);

module.exports = router;