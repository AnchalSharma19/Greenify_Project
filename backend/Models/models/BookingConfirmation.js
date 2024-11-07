// const mongoose = require('mongoose'); // Ensure this line is present

// const BookingConfirmationSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'User' // Assuming you have a User model to reference
//     },
//     slotId: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: 'Slot' // Reference to the Slot model
//     },
//     confirmationMessage: {
//         type: String,
//         required: true
//     },
//     slotDateTime: {
//         type: Date,
//         required: true
//     },
//     address: {
//         street: String,
//         city: String,
//         state: String,
//         zipCode: String,
//         country: String,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// }, { timestamps: true });

// // Export the model
// module.exports = mongoose.model('BookingConfirmation', BookingConfirmationSchema);
