const express = require('express');
const router = express.Router();

const postsController = require('../app/controllers/postsController');
router.use('/create', postsController.create);
router.use('/store', postsController.store);
router.use('/:slug', postsController.show);


module.exports = router;
