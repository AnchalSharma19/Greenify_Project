import React from "react";
import r1 from "../images/rubberimg/r1Orange.jpeg";
import r2 from "../images/rubberimg/r2eraser.jpeg";
import r3 from "../images/rubberimg/r3.jpeg";
import r4 from "../images/rubberimg/r4.jpeg";
import WwcItem from "./WwcItem";

const Rubber = () => {
	const data = [
		{
			id: 1,
			img: r1,
			listItems: [
				"Rubber tires",
				"Rubber shoe soles",
				"Rubber floor mats",
				"Rubber garden hoses",
				"Rubber sports balls (e.g., basketballs)",
			],
		},
		{
			id: 2,
			img: r2,
			listItems: [
				"Rubber erasers",
				"Rubber automotive seals",
				"Rubber gaskets",
				"Rubber bath mats",
				"Rubber watch straps",
			],
		},
		{
			id: 3,
			img: r3,
			listItems: [
				"Rubber bands",
				"Rubber insulation tubing",
				"Rubber washers",
				"Rubber door stoppers",
				"Rubber door stoppers",
				"Rubber yoga mats",
				"Rubber fishing waders",
			],
		},
		{
			id: 4,
			img: r4,
			listItems: [
				"Rubber shoe inserts",
				"Rubber phone cases",
				"Rubber bike handle grips",
				"Rubber hot water bottles",
				"Rubber cable covers",
			],
		},
	];
	const text = {
		title: "RUBBER",
		text1: "We collect all rubber including old and worn out rubber item that are no longer usable.",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default Rubber;
