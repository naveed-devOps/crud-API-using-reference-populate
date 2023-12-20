const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes for userController
router.get('/:id', userController.getUserDataWithCountryDetail);
router.post('/', userController.createUser);

module.exports = router;
