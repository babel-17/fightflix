const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const fightsCtrl = require('../../controllers/api/fights');

// All paths start with '/api/categories'
router.get('/', ensureLoggedIn, fightsCtrl.index);
router.get('/:id', ensureLoggedIn, fightsCtrl.show);
router.post('/', ensureLoggedIn, fightsCtrl.create);
router.post('/:id', ensureLoggedIn, fightsCtrl.update);
router.delete('/:id', ensureLoggedIn, fightsCtrl.delete);

module.exports = router;