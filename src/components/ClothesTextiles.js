import React from "react";
import c1 from "../images/clothimg/c1tshirt.jpeg";
import c2 from "../images/clothimg/c2shoes1.jpeg";
import c3 from "../images/clothimg/c3handbag.jpeg";
import c4 from "../images/clothimg/c4towels.jpg";
import WwcItem from "./WwcItem";
import "./WwcItem.css";

const ClothesTextiles = () => {
	const data = [
		{
			id: 1,
			img: c1,
			listItems: [
				"Dresses",
				"T-shirts & shirts",
				"Jumpers & jackets",
				"Pants, shorts & skirts etc.",
			],
			title: "Clothes",
		},
		{
			id: 2,
			img: c2,
			listItems: [
				"High heels",
				"Leather boots",
				"Sneakers",
				"Sandals etc. ",
			],
			title: "Any Shoes",
		},
		{
			id: 3,
			img: c3,
			listItems: [
				"Backpacks",
				"Bags",
				"Gloves",
				"Hats",
				"Jewellery",
				"Watches",
			],
			title: "Acessories",
		},
		{
			id: 4,
			img: c4,
			listItems: [
				"Blankets",
				"Linen",
				"Pillows/cushions (not feathered/memory foam/latex)",
				"Soft toys",
				"Towels",
			],
			title: "Towels",
		},
	];
	const text = {
		title: "CLOTHES & TEXTILES",
		text1: "We collect clothes, textiles, shoes and linen in sellable and unwearable condition.*",
		textm: "*Please note we cannot accept wet, damp or moldy clothing.",
		textl: "In sellable condition:",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default ClothesTextiles;
