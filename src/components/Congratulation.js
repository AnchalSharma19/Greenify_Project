import React from "react";
// import Confetti from "react-confetti";
import {Link} from "react-router-dom";
import "./Congratulation.css";

const Congratulation = ({name, reward, itemsPurchased}) => {
	return (
		<div className="congratulations-container">
			<h1 className="congratulations-title">
				Congratulations, janaki{name}!
			</h1>
			<p className="congratulations-message">
				You have successfully scheduled your pickup!
			</p>
			<div className="congratulation-reward-section">
				<p className="congratulation-reward-text">
					Your Reward: 10<strong>{reward} coins</strong>
				</p>
			</div>
			<p className="congratulations-message">Items Purchased:</p>
			<ul className="congratulation-item-list">
				{/* {itemsPurchased.map((item, index) => (
					<li key={index} className="congratulation-item">
						{item}
					</li>
				))} */}
				<li className="congratulation-item">plastic</li>
				<li className="congratulation-item">metal</li>
				<li className="congratulation-item">paper</li>
			</ul>
			<Link to="/Dashboard">
				<button className="congratulation-back-button">Go Back</button>
			</Link>
		</div>
	);
};

export default Congratulation;
