/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Link} from "react-router-dom";
import wornShirt from "../images/c0wornShirt.jpg";
import brokenPhone from "../images/e0brokenPhone.jpg";
import baloon from "../images/m0batteries.jpeg";
import polybag1 from "../images/p0polybag1.jpg";
import WwcPlus from "../images/wwcPlus.jpg";
import "./WhatWeCollect.css";

const WhatWeCollect = () => {
	const data = [
		{
			id: 1,
			route: "SoftPlastic",
			heading: "SOFT PLASTIC",
			text: "Flexible plastic than can be easily scrunched in your hand. ",
			Eg: "E.g. bread bags, produce bags or chip packets.",
			img: polybag1,
		},
		{
			id: 2,
			route: "ClothesTextiles",
			heading: "CLOTHES AND TEXTILES",
			text: "Clothes, shoes, accessories and linen in any condition.",
			Eg: "",
			img: wornShirt,
		},
		{
			id: 3,
			route: "EWaste",
			heading: "E-WASTE",
			text: "Small items that use electricity with a plug or batteries.  ",
			Eg: "E.g. mobile phone, laptop or kettle.",
			img: brokenPhone,
		},
		{
			id: 4,
			route: "Misfits",
			heading: "MISFITS",
			text: "Misfit items are other household items.",
			Eg: "E.g. polystyrene, batteries, coffee cups or lightbulbs.",
			img: baloon,
		},
	];
	return (
		<div className="wwc-container">
			<div className="wwc-header">
				{/* <img
					src={WwcImage}
					width="100%"
					height={350}
					className="wwc-img"
				/> */}
				<h1 className="header-text">WHAT WE COLLECT</h1>
			</div>
			<div className="middle">
				<div className="wwc-info">
					<h2>Meet the Everyday items</h2>
					<p>
						You can put these everyday household items all together
						in any shopping bag you have at home.
					</p>
				</div>
				<div className="wwc-items-wrap">
					{data.map((item) => (
						<div className="wwc-item" key={item.id}>
							<div className="item-img-wrap">
								<img src={item.img} />
							</div>
							<div className="item-info">
								<h3>{item.heading}</h3>
								<p>
									{item.text}
									<br />
									<br />
									{item.Eg}
								</p>
								{/* <BrowserRouter> */}
								<Link to={`/${item.route}`}>Find Out More</Link>
								{/* </BrowserRouter> */}
							</div>
						</div>
					))}
				</div>
			</div>
			<hr />
			<div className="plus">
				<div className="plus-wrap">
					<div className="plus-img-wrap">
						<img src={WwcPlus} />
					</div>
					<div className="plus-text">
						<h1>PLUS+ Items</h1>
						<p>
							We also collect tricky-to-recycle items that show up
							occasionally.
							<br />
							E.g. clunky cardboard or big electronics.
						</p>
						{/* <BrowserRouter> */}
						<Link to="/Plus">Find Out More</Link>
						{/* </BrowserRouter> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeCollect;
