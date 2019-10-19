const router = require('express').Router();
const signinController = require('../controller/signinController');

/**
 * @swagger
 * /api/signin:
 *    get:
 *      description: This api is used to sign in the users
 */
router.get('/', signinController.GET_signin_ROOT);


/**
 * @swagger
 * /api/signin:
 *    post:
 *      description: This api is used to sign in the users
 */
router.post('/', signinController.POST_signin_ROOT);

module.exports = router