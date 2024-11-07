const express = require('express');
const { saveAddress, getUserAddresses } = require('../../Controllers/controllers/addressController');
const router = express.Router();

// Route to save a new address
router.post('/', saveAddress);

// Route to retrieve all addresses for a user
router.get('/', getUserAddresses);

module.exports = router;

