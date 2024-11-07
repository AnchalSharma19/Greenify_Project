const mongoose = require('mongoose');

// Define Slot schema
const slotSchema = new mongoose.Schema({
    dateTime: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

// Create and export Slot model
const Slot = mongoose.model('Slot', slotSchema);
module.exports = Slot;
