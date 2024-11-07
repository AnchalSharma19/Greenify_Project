

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import routes, models, and controllers
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const Slot = require('./Models/models/Slot');
const Address = require('./Models/models/Address');
const { saveAddress } = require('./Controllers/controllers/addressController');

// Initialize the express app
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the specified port from .env or default to 8080
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_CONN;

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

// API Endpoints
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Auth and Product Routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Slot Endpoints
app.get('/api/slots', async (req, res) => {
    try {
        const slots = await Slot.find();
        res.json(slots);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching slots', error });
    }
});

app.post('/api/slots', async (req, res) => {
    const { dateTime, address } = req.body;

    // Validate required fields
    if (!dateTime || !address) {
        return res.status(400).json({
            message: 'Missing required fields',
            errors: {
                dateTime: !dateTime ? 'Date and time are required' : null,
                address: !address ? 'Address is required' : null,
            },
        });
    }

    try {
        const newSlot = new Slot({
            dateTime: new Date(dateTime),  // Ensure proper Date format
            address: address,
        });

        const savedSlot = await newSlot.save();
        res.status(201).json(savedSlot);
    } catch (error) {
        console.error("Error creating slot:", error);
        res.status(500).json({ message: 'Error creating slot', error: error.message });
    }
});

// Address Endpoints
app.post('/api/addresses', saveAddress);

app.get('/api/addresses', async (req, res) => {
    const { userId } = req.query;
    try {
        const addresses = await Address.find({ userId });
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching addresses', error });
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
