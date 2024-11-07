// const BookingConfirmation = require('../models/BookingConfirmation');

// exports.createBookingConfirmation = async (req, res) => {
//     const bookingDetails = req.body;
//     const bookingConfirmation = new BookingConfirmation(bookingDetails);
    
//     try {
//         const savedConfirmation = await bookingConfirmation.save();
//         res.status(201).json(savedConfirmation);
//     } catch (error) {
//         res.status(500).json({ message: 'Error creating booking confirmation', error });
//     }
// };

// exports.getBookingConfirmations = async (req, res) => {
//     const { userId } = req.query;
//     try {
//         const confirmations = await BookingConfirmation.find({ userId });
//         res.json(confirmations);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching booking confirmations', error });
//     }
// };
