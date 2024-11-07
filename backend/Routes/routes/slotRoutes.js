const express = require('express');
const router = express.Router();
const slotController = require('../../Controllers/controllers/slotController');

// Route to get all slots
router.get('/', slotController.getSlots);

// Route to create a new slot
router.post('/', slotController.createSlot);

module.exports = router;
