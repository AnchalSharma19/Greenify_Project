import React from "react";
import m1 from "../images/misfitimg/m1baloon.jpg";
import m2 from "../images/misfitimg/m2cd.jpg";
import m3 from "../images/misfitimg/m3foodPacket.jpg";
import m4 from "../images/misfitimg/m4hanger.jpeg";
import WwcItem from "./WwcItem";
import "./WwcItem.css";

const Misfits = () => {
	const data = [
		{
			id: 1,
			img: m1,
			listItems: [
				"Balloons",
				"Batteries",
				"Beer clips",
				"Blister packs",
				"Books (in sellable condition)",
				"Bottles and cans",
			],
		},
		{
			id: 2,
			img: m2,
			listItems: [
				"Cosmetic, hair care or skin care packaging",
				"Disposable cups",
				"DVDs and CDs",
				"Eyewear",
				"Floss containers",
				"Lightbulbs, fluorescent tubes",
				"Medicine",
			],
		},
		{
			id: 3,
			img: m3,
			listItems: [
				"Packaged food",
				"Plastic plant pots",
				"Polystyrene",
				"Printer cartridges",
				"Single use contact cases",
				"Reusable water bottles",
			],
		},
		{
			id: 4,
			img: m4,
			listItems: [
				"Toothbrush & toothpaste tube packaging",
				"Toys in sellable condition",
				"Writing instruments",
				"Wire coat hangers",
				"X-ray films",
				"Yoga mat",
			],
		},
	];
	const text = {
		title: "MISFITS",
		text1: "Misfit items are other household items that don’t fit into the other categories.",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default Misfits;
