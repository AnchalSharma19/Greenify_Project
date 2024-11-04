import React from "react";
import pp1 from "../images/paperimg/pp1.jpeg";
import pp2 from "../images/paperimg/pp2.jpeg";
import pp3 from "../images/paperimg/pp3.jpeg";
import pp4 from "../images/paperimg/pp4.jpeg";
import WwcItem from "./WwcItem";

const Paper = () => {
	const data = [
		{
			id: 1,
			img: pp1,
			listItems: [
				"Newspaper",
				"Magazines",
				"Office paper",
				"Cardboard boxes",
				"Paper bags",
			],
		},
		{
			id: 2,
			img: pp2,
			listItems: [
				"Paper envelopes",
				"Books",
				"Notebooks",
				"Wrapping paper (non-metallic)",
				"Paper towel rolls",
			],
		},
		{
			id: 3,
			img: pp3,
			listItems: [
				"Egg cartons (paper-based",
				"Paper receipts",
				"Posters",
				"File folders",
				"Packing paper",
				"Paper flyers",
			],
		},
		{
			id: 4,
			img: pp4,
			listItems: [
				"Brochures",
				"Junk mail",
				"Gift bags (paper-based)",
				"Construction paper",
				"Paper invitations",
				"Business cards",
			],
		},
	];
	const text = {
		title: "PAPER",
		text1: "We collect any item made out of paper or cardboard",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default Paper;
