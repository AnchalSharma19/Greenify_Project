
const API_URL = 'http://localhost:8080/api';

// Fetch all available slots
export const fetchSlots = async () => {
    const response = await fetch(`${API_URL}/slots`);
    if (!response.ok) {
        throw new Error('Failed to fetch slots');
    }
    return await response.json();
};

// Fetch a slot by its ID
export const fetchSlotById = async (slotId) => {
    const response = await fetch(`${API_URL}/slots/${slotId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch slot details');
    }
    return await response.json();
};

// Save address details, including date and time for the booking
export const saveAddress = async (addressData) => {
    const { shipAddress, address2, locality, state, postcode, country, dateTime } = addressData;

    // Ensure that all required fields are included in the request
    const requestData = {
        shipAddress,  // Map shipAddress to ship-address
        address2,      // Optional additional address field
        locality,      // Locality is optional
        state,         // State is required
        postcode,      // Postal code is required
        country,       // Country is required
        dateTime,      // DateTime is required for the booking
    };

    const response = await fetch(`${API_URL}/addresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        const errorText = await response.text();  // Capture the error message from the response
        throw new Error(`Failed to save address: ${response.status} - ${errorText}`);
    }

    return await response.json();
};

// Book a slot with the selected date-time and address
export const bookSlot = async (slotId, addressData) => {
    const { shipAddress, address2, locality, state, postcode, country, dateTime } = addressData;

    const requestData = {
        slotId,        // The slot ID that is being booked
        shipAddress,   // Shipping address for the booking
        address2,      // Optional additional address field
        locality,      // Locality or city for the booking
        state,         // State for the booking
        postcode,      // Postal code for the booking
        country,       // Country for the booking
        dateTime,      // Date-time for the booking
    };

    const response = await fetch(`${API_URL}/book-slot`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to book slot: ${response.status} - ${errorText}`);
    }

    return await response.json();
};

// Fetch saved addresses for a user (optional user ID filter)
export const fetchAddresses = async (userId = '') => {
    const url = userId ? `${API_URL}/addresses?userId=${userId}` : `${API_URL}/addresses`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch addresses');
    }
    return await response.json();
};
