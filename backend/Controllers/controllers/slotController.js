const Slot = require('../../Models/models/Slot');

// Fetch all slots
exports.getSlots = async (req, res) => {
    try {
        const slots = await Slot.find(); // Retrieve all slots from the database
        res.status(200).json(slots);  // Send back the slots as a response
    } catch (error) {
        res.status(500).json({ message: 'Error fetching slots', error: error.message });
    }
};

// Create a new slot
exports.createSlot = async (req, res) => {
    const { dateTime, address } = req.body;

    // Validate required fields
    if (!dateTime || !address) {
        return res.status(400).json({ 
            message: "Missing required fields", 
            errors: { 
                dateTime: !dateTime ? "Date and time are required" : null, 
                address: !address ? "Address is required" : null 
            } 
        });
    }

    // Convert dateTime to a Date object (ensuring it's a valid date)
    const slotDateTime = new Date(dateTime);
    if (isNaN(slotDateTime.getTime())) {
        return res.status(400).json({ message: "Invalid date and time format" });
    }

    // Create the new slot
    const newSlot = new Slot({
        dateTime: slotDateTime, // Store the date as a Date object
        address: address, // Assuming address is a string, adjust if necessary
    });

    try {
        const savedSlot = await newSlot.save(); // Save the slot to the database
        res.status(201).json(savedSlot); // Respond with the saved slot
    } catch (error) {
        console.error('Error creating slot:', error);
        res.status(500).json({ message: 'Error creating slot', error: error.message });
    }
};
