import React from "react";
import {Link} from "react-router-dom";
import e1 from "../assets/images/e1charger.jpg";
import e2 from "../assets/images/e2dryer.jpg";
import e3 from "../assets/images/e3brokenPhone.jpeg";
import e4 from "../assets/images/e4.jpg";
import "./WwcItem.css";

import packBackground from "../images/topbackground.png";

const EWaste = () => {
	const data = [
		{
			id: 1,
			img: e1,
			listItems: [
				"Alarm clock",
				"Angle grinder",
				"Blender and mixer",
				"Charger cord Computer parts - mouse, keyboard etc.",
				"Digital cameras",
				"DVD player",
			],
		},
		{
			id: 2,
			img: e2,
			listItems: [
				"Electrical cable",
				"Electric games, consoles and toys",
				"Electric grill",
				"Electric toothbrush",
				"Games console",
				"Hairdryer",
				"Headphones and earphones",
			],
		},
		{
			id: 3,
			img: e3,
			listItems: [
				"Kettle",
				"Laptop",
				"Mobile phones, mp3 players",
				"Sandwich press",
				"Smart watch,",
			],
		},
		{
			id: 4,
			img: e4,
			listItems: [
				"Iron ",
				"Small stereos, speakers, radios",
				"Small toaster",
				"Torches",
				"Video player",
				"Wifi modem",
			],
		},
	];
	return (
		<div className="container-item-w">
			<div className="full-width-image">
				<img src={packBackground} alt="Full width banner" />
			</div>
			<h1 className="title">E-WASTE</h1>
			<div className="text-wrap">
				<h3>
					E-waste is an electrical appliance that has a plug or uses a
					battery.
				</h3>

				<h1>We Collect: </h1>
				<h3>
					Small electronic items that fit in a shopping bag. <br />
					For example:
				</h3>
			</div>
			<div className="listItems-wrap">
				{/* <div className="listItems-items"> */}
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
				{/* </div> */}
			</div>

			<Link to="/WhatWeCollect">
				<h1 className="wwc">WHAT WE COLLECT&#160;&gt;&gt;</h1>
			</Link>
		</div>
	);
};

export default EWaste;
