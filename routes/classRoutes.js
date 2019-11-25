const router = require('express').Router();
const classController = require('../controller/classController');

router.post('/',classController.POST_class_ROOT);
router.get('/',classController.GET_class_ROOT);
router.patch('/:id',classController.PATCH_class_ROOT);
router.get('/:id',classController.GET_class_DETAIL);

module.exports = router;
