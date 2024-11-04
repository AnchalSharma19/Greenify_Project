import React from "react";
import {Link} from "react-router-dom";
import packBackground from "../images/topbackground.png";
import "./WwcItem.css";

const WwcItem = ({data, text}) => {
	return (
		<div className="container-item-w">
			<div className="full-width-image">
				<img src={packBackground} alt="Full width banner" />
			</div>
			<h1 className="title">{text.title}</h1>
			<div className="text-wrap">
				<h3>{text.text1}</h3>
				{text.textm ? <p>{text.textm}</p> : ""}

				<h1>We Collect: </h1>
				{text.textl ? <h3>{text.textl}</h3> : ""}
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
			<div className="last-link">
				<Link to="/WhatWeCollect">
					<h1 className="wwc">WHAT WE COLLECT&#160;&gt;&gt;</h1>
				</Link>
			</div>
		</div>
	);
};

export default WwcItem;
