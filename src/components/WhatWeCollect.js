/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Link} from "react-router-dom";
import wornShirt from "../images/wwcimg/c0wornShirt.jpg";
import brokenPhone from "../images/wwcimg/e0brokenPhone.jpg";
import g0 from "../images/wwcimg/g0Meyerton Glass.jpeg";
import baloon from "../images/wwcimg/m0batteries.jpeg";
import mm0 from "../images/wwcimg/mm0keys.jpeg";
import polybag1 from "../images/wwcimg/p0polybag1.jpg";
import pp0 from "../images/wwcimg/pp0.jpeg";
import r0 from "../images/wwcimg/r0Rubber Band.jpeg";
import WwcPlus from "../images/wwcimg/wwcPlus.jpg";
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
			route: "Glass",
			heading: "GLASS",
			text: "Glasses like glass bottles and jars are recycleable.",
			Eg: "E.g. Bottles of any colour, Jars of any colour, Cosmetics and perfume containers.",
			img: g0,
		},
		{
			id: 5,
			route: "Rubber",
			heading: "RUBBER",
			text: "Old and worn out rubber item that are no longer usable or any rubber.",
			Eg: "E.g. Watch straps, cable cover, hot water bottles.",
			img: r0,
		},
		{
			id: 6,
			route: "Paper",
			heading: "PAPER",
			text: "Any item made of paper or cardboard",
			Eg: "E.g. Newspaper, files, magazines, egg cartons",
			img: pp0,
		},
		{
			id: 7,
			route: "Metal",
			heading: "METAL",
			text: "Small items made of metal",
			Eg: "E.g. Jewelry, keys, foil or utensils",
			img: mm0,
		},
		{
			id: 8,
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
								<Link
									to={`/${item.route}`}
									style={{
										textDecoration: "none",
										color: "#FF3EA5",
									}}
								>
									Find Out More
								</Link>
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
						<Link
							to="/Plus"
							style={{textDecoration: "none", color: "#FF3EA5"}}
						>
							Find Out More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeCollect;
