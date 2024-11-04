import React from "react";
import g1 from "../images/glassimg/g1.jpeg";
import g2 from "../images/glassimg/g2Candle Moulds….jpeg";
import g3 from "../images/glassimg/g3linke Vase - linke Vase.jpeg";
import g4 from "../images/glassimg/g4.jpeg";
import WwcItem from "./WwcItem";

const Glass = () => {
	const data = [
		{
			id: 1,
			img: g1,
			listItems: [
				"Glass bottles (e.g., soda, wine, beer)",
				"Glass jars (e.g., sauce, jam)",
				"Glass beverage pitchers",
				"Broken glassware",
				"Glass cosmetic bottles",
			],
		},
		{
			id: 2,
			img: g2,
			listItems: [
				"Glass vases",
				"Glass candle holders",
				"Glass cooking dishes",
				"Laboratory glassware ",
				"Clear glass sheets",
				"Window glass ",
			],
		},
		{
			id: 3,
			img: g3,
			listItems: [
				"Glass medicine bottles",
				"Glass storage jars",
				"Glass light covers",
				"Glass coffee pots",
				"Small glass decoration items",
				"Glass drinkware (non-ceramic)",
			],
		},
		{
			id: 4,
			img: g4,
			listItems: [
				"Glass condiment containers",
				"Frosted glass items",
				"Heat-resistant glass (e.g., Pyrex)",
				"Mirrors",
				"Aquarium glass (small, broken-down pieces)",
			],
		},
	];
	const text = {
		title: "GLASS",
		text1: "Glasses like glass bottles and jars are recycleable.",
		textm: "*Please note we cannot accept ceramic items.",
	};
	return (
		<>
			<WwcItem data={data} text={text} />
		</>
	);
};

export default Glass;
