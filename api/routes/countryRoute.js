const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Routes for countryController
router.get('/', countryController.getAllCountry);
router.get('/:id', countryController.getCountryById);
router.post('/', countryController.createCountry);
router.delete('/:id', countryController.deletedCountryById);
router.put('/:id', countryController.updatedCountryById);

module.exports = router;
