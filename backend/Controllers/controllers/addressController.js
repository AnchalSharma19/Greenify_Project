const Address = require('../../Models/models/Address'); // Address model for saving address to the database

// Controller function to save address
const saveAddress = async (req, res) => {
    const { shipAddress, address2, locality, state, postcode, country, dateTime } = req.body;

    // Validate the incoming data
    if (!shipAddress || !locality || !state || !postcode || !country || !dateTime) {
        return res.status(400).json({
            message: "Missing required fields",
            errors: {
                shipAddress: !shipAddress ? "Deliver to is required" : null,
                locality: !locality ? "City is required" : null,
                state: !state ? "State/Province is required" : null,
                postcode: !postcode ? "Postal code is required" : null,
                country: !country ? "Country is required" : null,
                dateTime: !dateTime ? "Date and time are required" : null
            }
        });
    }

    try {
        // Convert dateTime to Date object
        const formattedDateTime = new Date(dateTime); 
        if (isNaN(formattedDateTime)) {
            return res.status(400).json({ message: "Invalid dateTime format" });
        }

        // Create a new address document
        const newAddress = new Address({
            shipAddress,  // Corrected to match model field name
            address2,
            locality,
            state,
            postcode,
            country,
            dateTime: formattedDateTime  // Store as Date object
        });

        // Save the address to the database
        const savedAddress = await newAddress.save();

        return res.status(201).json({
            message: "Address saved successfully",
            address: savedAddress
        });

    } catch (error) {
        console.error("Error saving address:", error);
        return res.status(500).json({
            message: "Error creating address",
            error: error.message
        });
    }
};

// Controller function to retrieve all user addresses (if you have user-related functionality)
const getUserAddresses = async (req, res) => {
    try {
        const addresses = await Address.find(); // Adjust query if user-based filtering is required
        return res.status(200).json(addresses);
    } catch (error) {
        console.error("Error fetching addresses:", error);
        return res.status(500).json({
            message: "Error fetching addresses",
            error: error.message
        });
    }
};

module.exports = {
    saveAddress,
    getUserAddresses
};
