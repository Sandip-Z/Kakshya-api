const router = require('express').Router();
const signinController = require('../Controller/signinController');

router.get('/', signinController.GET_signin_ROOT);
router.post('/', signinController.POST_signin_ROOT);

module.exports = router