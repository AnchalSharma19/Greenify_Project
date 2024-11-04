import React from "react";
import mm1 from "../images/metalimg/mm1cans.jpeg";
import mm2 from "../images/metalimg/mm2utensils.jpeg";
import mm3 from "../images/metalimg/mm3bakingtray.jpeg";
import mm4 from "../images/metalimg/mm4nails.jpeg";
import WwcItem from "./WwcItem";

const Metal = () => {
	const data = [
		{
			id: 1,
			img: mm1,
			listItems: [
				"Aluminum cans",
				"Tin cans",
				"Steel cans",
				"Aluminum foil",
				"Metal bottle caps",
			],
		},
		{
			id: 2,
			img: mm2,
			listItems: [
				"Metal lids",
				"Aluminum baking trays",
				"Metal hangers",
				"Metal pots and pans ",
				"Steel nails",
			],
		},
		{
			id: 3,
			img: mm3,
			listItems: [
				"Copper wiring",
				"Metal pipes",
				"GlovBrass items (e.g., fittings)",
				"Metal filing cabinets",
				"Metal keys",
				"Metal utensils",
			],
		},
		{
			id: 4,
			img: mm4,
			listItems: [
				"Aluminum siding",
				"Steel rebar (small pieces)",
				"Metal bed frames",
				"Metal jewelry",
				"Metal shelving",
			],
		},
	];
	const text = {
		title: "METAL",
		text1: "We collect small to medium sized items made of metal",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default Metal;
