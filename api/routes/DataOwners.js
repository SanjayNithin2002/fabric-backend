const express = require('express');
const router = express.Router();

const checkAuth = require('../middlewares/utilities/checkAuth');
const dataOwnerControllers = require('../controllers/DataOwners');

router.get('/', checkAuth, dataOwnerControllers.getAll);
router.get('/:id', checkAuth, dataOwnerControllers.getById);
router.post('/login', dataOwnerControllers.login);
router.post('/signup', dataOwnerControllers.signup);
router.delete('/:id', checkAuth, dataOwnerControllers.deleteById);

module.exports = router;