const router = require('express').Router();
const signinController = require('../controller/signinController');

/**
 * @swagger
 *
 * /api/signin:
 *   get:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: json
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: json
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
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