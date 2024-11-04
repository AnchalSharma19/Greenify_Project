import React from "react";
import e1 from "../images/ewasteimg/e1charger.jpg";
import e2 from "../images/ewasteimg/e2dryer.jpg";
import e3 from "../images/ewasteimg/e3brokenPhone.jpeg";
import e4 from "../images/ewasteimg/e4.jpg";
import "./WwcItem.css";

import WwcItem from "./WwcItem";

const EWaste = () => {
	const data = [
		{
			id: 1,
			img: e1,
			listItems: [
				"Alarm clock",
				"Angle grinder",
				"Blender and mixer",
				"Charger cord Computer parts - mouse, keyboard etc.",
				"Digital cameras",
				"DVD player",
			],
		},
		{
			id: 2,
			img: e2,
			listItems: [
				"Electrical cable",
				"Electric games, consoles and toys",
				"Electric grill",
				"Electric toothbrush",
				"Games console",
				"Hairdryer",
				"Headphones and earphones",
			],
		},
		{
			id: 3,
			img: e3,
			listItems: [
				"Kettle",
				"Laptop",
				"Mobile phones, mp3 players",
				"Sandwich press",
				"Smart watch,",
			],
		},
		{
			id: 4,
			img: e4,
			listItems: [
				"Iron ",
				"Small stereos, speakers, radios",
				"Small toaster",
				"Torches",
				"Video player",
				"Wifi modem",
			],
		},
	];
	const text = {
		title: "E-WASTE",
		text1: "E-waste is an electrical appliance that has a plug or uses a battery.",
		textl: `Small electronic items that fit in a shopping bag. For example:`,
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default EWaste;
