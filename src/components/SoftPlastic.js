import React from "react";
import {Link} from "react-router-dom";
import p2 from "../assets/images/p2polybag2.jpg";
import p3 from "../assets/images/p3softPlastic.jpeg";
import p4 from "../assets/images/p4ziplock.jpg";
import p1 from "../assets/images/polybag4.jpeg";
import packBackground from "../images/topbackground.png";
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
	return (
		<div className="container">
			<div className="full-width-image">
				<img src={packBackground} alt="Full width banner" />
			</div>
			<h1 className="title">SOFT PLASTIC</h1>
			<div className="text-wrap">
				<h3>Soft plastics can be easily scrunched in your hand.</h3>
				<p>
					Please make sure all soft plastic is clean and dry to
					prevent mould.
				</p>
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

export default SoftPlastic;
