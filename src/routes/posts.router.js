const express = require('express');
const router = express.Router();

const postsController = require('../app/controllers/postsController');
router.get('/create', postsController.create);
router.get('/store', postsController.store);
router.get('/:slug', postsController.show);
router.get('/:id/edit', postsController.edit);
router.put('/:id', postsController.update);
router.delete('/:id', postsController.delete);
router.get('/', postsController.index);


module.exports = router;
