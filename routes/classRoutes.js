const router = require('express').Router();
const classController = require('../controller/classController');

router.post('/',classController.POST_class_ROOT);
router.get('/',classController.GET_class_ROOT);

module.exports = router;
