import {MobileDateTimePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer, DemoItem} from "@mui/x-date-pickers/internals/demo";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React from "react";
import "./Slot.css";

const Slot = () => {
	return (
		<div className="slot-container">
			<div className="slot-heading">
				<h2>SLOT BOOKING</h2>
			</div>
			<div className="date-time-container">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DemoContainer components={["MobileDateTimePicker"]}>
						{/* <DemoItem label="Desktop variant">
						<DesktopDateTimePicker
							defaultValue={dayjs("2022-04-17T15:30")}
						/>
					</DemoItem> */}
						<DemoItem label="Select Date and Time">
							<MobileDateTimePicker
								defaultValue={dayjs("2022-04-17T15:30")}
							/>
						</DemoItem>
					</DemoContainer>
				</LocalizationProvider>
			</div>
			<div className="location-container">
				<form
					id="address-form"
					action=""
					method="get"
					autocomplete="off"
				>
					<p class="title-loc">Your Location</p>
					<p class="note">
						<em>* = required field</em>
					</p>
					<label class="full-field">
						<span class="form-label">Deliver to*</span>
						<input
							id="ship-address"
							name="ship-address"
							required
							autocomplete="off"
						/>
					</label>
					<label class="full-field">
						<span class="form-label">
							Apartment, unit, suite, or floor #
						</span>
						<input id="address2" name="address2" />
					</label>
					<label class="full-field">
						<span class="form-label">City*</span>
						<input id="locality" name="locality" required />
					</label>
					<label class="slim-field-start">
						<span class="form-label">State/Province*</span>
						<input id="state" name="state" required />
					</label>
					<label class="slim-field-end" for="postal_code">
						<span class="form-label">Postal code*</span>
						<input id="postcode" name="postcode" required />
					</label>
					<label class="full-field">
						<span class="form-label">Country/Region*</span>
						<input id="country" name="country" required />
					</label>
					<button type="button" class="my-button">
						Save address
					</button>

					<input type="reset" value="Clear form" />
				</form>
			</div>
			<div className="continue-btn">
				{/* <Link to="/Slot"> */}
				<button className="btn">CONTINUE...</button>
				{/* </Link> */}
			</div>
		</div>
	);
};

export default Slot;
