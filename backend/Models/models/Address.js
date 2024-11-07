

const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    shipAddress: {  // updated field name
        type: String,
        required: true
    },
    address2: {
        type: String,
        default: ""  // Optional field
    },
    locality: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postcode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    dateTime: {
        type: Date,
        required: true
    }
}, { timestamps: true });

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
