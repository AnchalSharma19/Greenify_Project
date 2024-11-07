

import React, { useState } from "react";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { saveAddress } from './api'; // Import API functions
import "./Slot.css";

const Slot = () => {
    const [dateTime, setDateTime] = useState(dayjs());
    const [addressData, setAddressData] = useState({
        shipAddress: "",
        address2: "",
        locality: "",
        state: "",
        postcode: "",
        country: ""
    });

    const [isSlotBooked, setIsSlotBooked] = useState(false);

    const handleDateTimeChange = (newDate) => {
        setDateTime(newDate);
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setAddressData({ ...addressData, [name]: value });
    };

    const handleAddressSubmit = async (e) => {
        e.preventDefault();

        const addressPayload = {
            "shipAddress": addressData.shipAddress,
            address2: addressData.address2,
            locality: addressData.locality,
            state: addressData.state,
            postcode: addressData.postcode,
            country: addressData.country,
            dateTime: dateTime.toISOString()
        };

        try {
            await saveAddress(addressPayload);
            alert("Address saved successfully!");
            // Do not clear the form after submission
            // setAddressData({
            //     shipAddress: "",
            //     address2: "",
            //     locality: "",
            //     state: "",
            //     postcode: "",
            //     country: ""
            // });
            setDateTime(dayjs()); // Optional: Reset date-time picker
        } catch (error) {
            console.error("Failed to save address:", error);
            alert("Error saving address. Please try again.");
        }
    };

    const handleContinueClick = () => {
        setIsSlotBooked(true);
        setTimeout(() => {
            setIsSlotBooked(false);
            window.location.reload(); // This will reload the page
        }, 3000); // 3 seconds to hide the message
    };

    return (
        <div className="slot-container">
            <div className="slot-heading">
                <h2>SLOT BOOKING</h2>
            </div>
            <div className="date-time-container">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["MobileDateTimePicker"]}>
                        <DemoItem label="Select Date and Time">
                            <MobileDateTimePicker
                                value={dateTime}
                                onChange={handleDateTimeChange}
                            />
                        </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className="location-container">
                <form id="address-form" onSubmit={handleAddressSubmit} autoComplete="off">
                    <p className="title-loc">Your Location</p>
                    <p className="note">
                        <em>* = required field</em>
                    </p>
                    <label className="full-field">
                        <span className="form-label">Deliver to*</span>
                        <input
                            id="shipAddress"
                            name="shipAddress"
                            value={addressData.shipAddress}
                            onChange={handleAddressChange}
                            required
                            autoComplete="off"
                        />
                    </label>
                    <label className="full-field">
                        <span className="form-label">
                            Apartment, unit, suite, or floor #
                        </span>
                        <input
                            id="address2"
                            name="address2"
                            value={addressData.address2}
                            onChange={handleAddressChange}
                        />
                    </label>
                    <label className="full-field">
                        <span className="form-label">City*</span>
                        <input
                            id="locality"
                            name="locality"
                            value={addressData.locality}
                            onChange={handleAddressChange}
                            required
                        />
                    </label>
                    <label className="slim-field-start">
                        <span className="form-label">State/Province*</span>
                        <input
                            id="state"
                            name="state"
                            value={addressData.state}
                            onChange={handleAddressChange}
                            required
                        />
                    </label>
                    <label className="slim-field-end" htmlFor="postal_code">
                        <span className="form-label">Postal code*</span>
                        <input
                            id="postcode"
                            name="postcode"
                            value={addressData.postcode}
                            onChange={handleAddressChange}
                            required
                        />
                    </label>
                    <label className="full-field">
                        <span className="form-label">Country/Region*</span>
                        <input
                            id="country"
                            name="country"
                            value={addressData.country}
                            onChange={handleAddressChange}
                            required
                        />
                    </label>
                    <button type="submit" className="my-button">
                        Save address
                    </button>
                    <input
                        type="reset"
                        value="Clear form"
                        onClick={() => setAddressData({
                            shipAddress: "",
                            address2: "",
                            locality: "",
                            state: "",
                            postcode: "",
                            country: ""
                        })}
                    />
                </form>
            </div>
            <div className="continue-btn">
                <button className="btn" onClick={handleContinueClick}>CONTINUE...</button>
                {isSlotBooked && alert("Yay! Your slot has been successfully booked! We're excited to serve you!")}
            </div>
        </div>
    );
};

export default Slot;

