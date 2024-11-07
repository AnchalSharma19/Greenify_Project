import React from "react";
import "./Pickup.css";
// import { IconName } from "react-icons/im"
import {FaBasketballBall} from "react-icons/fa";
import {FaHeadphones} from "react-icons/fa6";
import {
	GiClothes,
	GiLipstick,
	GiNails,
	GiNewspaper,
	GiShatteredGlass,
	GiWaterBottle,
} from "react-icons/gi";
import {Link} from "react-router-dom";
// import {Link} from "react-";

const Pickup = () => {
	// const [isSelected, setIsSelected] = useState(false);
	// const handleClick = () => {
	// 	setIsSelected(true);
	// };
	const data = [
		{
			id: 1,
			icon: <GiWaterBottle />,
			title: "Plastic",
		},
		{
			id: 2,
			icon: <GiClothes />,
			title: "Clothes and textle",
		},
		{
			id: 3,
			icon: <FaHeadphones />,
			title: "E-Waste",
		},
		{
			id: 4,
			icon: <GiShatteredGlass />,
			title: "Glass",
		},
		{
			id: 5,
			icon: <FaBasketballBall />,
			title: "Rubber",
		},
		{
			id: 6,
			icon: <GiNewspaper />,
			title: "Paper",
		},
		{
			id: 7,
			icon: <GiNails />,
			title: "Metal",
		},
		{
			id: 8,
			icon: <GiLipstick />,
			title: "Misfits",
		},
	];

	return (
		<>
			{/* {!isSelected && ( */}
			{/* // <> */}
			<div className="pickup-container">
				<div className="text-container">
					<h1>Welcome To Greenify JANAKI</h1>
					<h3>Select everything you need to recycle.</h3>
				</div>
				<div className="material-container">
					{data.map((item) => (
						<div className="material-box" key={item.id}>
							<div className="material-icon">{item.icon}</div>
							<div className="material-text">
								<p>{item.title}</p>
							</div>
							<div className="material-checkbox">
								<input type="checkbox" />
							</div>
						</div>
					))}
				</div>
				<div className="continue-btn">
					<Link to="/Slot">
						<button className="btn">CONTINUE</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Pickup;
