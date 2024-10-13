import React from "react";
import {Link} from "react-router-dom";
import c1 from "../assets/images/c1tshirt.jpeg";
import c2 from "../assets/images/c2shoes1.jpeg";
import c3 from "../assets/images/c3handbag.jpeg";
import c4 from "../assets/images/c4towels.jpg";
import packBackground from "../images/topbackground.png";
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
	return (
		<div className="container">
			<div className="full-width-image">
				<img src={packBackground} alt="Full width banner" />
			</div>
			<h1 className="title">CLOTHES & TEXTILES</h1>
			<div className="text-wrap">
				<h3>
					We collect clothes, textiles, shoes and linen in sellable
					and unwearable condition.*
				</h3>
				<p>
					*Please note we cannot accept wet, damp or moldy clothing.
				</p>

				<h1>We Collect: </h1>
				<h3>In sellable condition:</h3>
			</div>
			<div className="listItems-wrap">
				{data.map((item) => (
					<div className="ListItem" key={item.id}>
						<div className="img-wrap">
							<img src={item.img} alt="item-image" />
						</div>
						<div className="list-item-wrap">
							<h3>{item.title}</h3>
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

export default ClothesTextiles;
