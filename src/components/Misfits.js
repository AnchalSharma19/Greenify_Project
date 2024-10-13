import React from "react";
import {Link} from "react-router-dom";
import m1 from "../images/m1baloon.jpg";
import m2 from "../images/m2cd.jpg";
import m3 from "../images/m3foodPacket.jpg";
import m4 from "../images/m4hanger.jpeg";
import packBackground from "../images/topbackground.png";
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
	return (
		<div className="container">
			<div className="full-width-image">
				<img src={packBackground} alt="Full width banner" />
			</div>
			<h1 className="title">MISFITS</h1>
			<div className="text-wrap">
				<h3>
					Misfit items are other household items that don’t fit into
					the other categories.
				</h3>

				<h1>We Collect: </h1>
			</div>
			<div className="listItems-wrap">
				{data.map((item) => (
					<div className="ListItem" key={item.id}>
						<div className="img-wrap">
							<img src={item.img} alt="item-image" />
						</div>
						<div className="list-item-wrap">
							<ul>
								{item.listItems.map((listItem) => (
									<li className="list-item">{listItem}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			<Link to="/WhatWeCollect">
				<h1 className="wwc">WHAT WE COLLECT&#160;&gt;&gt;</h1>
			</Link>
		</div>
	);
};

export default Misfits;
