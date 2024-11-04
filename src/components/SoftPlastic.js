import React from "react";
import p2 from "../images/softplasticimg/p2polybag2.jpg";
import p3 from "../images/softplasticimg/p3softPlastic.jpeg";
import p4 from "../images/softplasticimg/p4ziplock.jpg";
import p1 from "../images/softplasticimg/polybag4.jpeg";
import WwcItem from "./WwcItem";
import "./WwcItem.css";

const SoftPlastic = () => {
	const data = [
		{
			id: 1,
			img: p1,
			listItems: [
				"Biscuit packaging (not trays)",
				"Bread bags",
				"Bubble wrap",
				"Cereal box liners",
			],
		},
		{
			id: 2,
			img: p2,
			listItems: [
				"Confectionery packets and bags",
				"Fresh produce bags, incl. string bags",
				"Frozen food bags",
			],
		},
		{
			id: 3,
			img: p3,
			listItems: [
				"Plastic film",
				"Plastic sachets",
				"Shopping and grocery bags",
				"Silver lined chip bags",
			],
		},
		{
			id: 4,
			img: p4,
			listItems: [
				"Squeeze pouches ",
				"Sturdy pet food bag with 'return to store' label",
				"Zip lock bags",
			],
		},
	];
	const text = {
		title: "SOFT PLASTIC",
		text1: "Soft plastics can be easily scrunched in your hand.",
		textm: "Please make sure all soft plastic is clean and dry to prevent mould.",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default SoftPlastic;
