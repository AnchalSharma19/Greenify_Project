import {default as React, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MyImageSvg from "../assets/logo-final-removebg-preview 2.svg";
import "./DashNav.css";

const DashNav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState(true);
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		window.addEventListener("resize", handleResize);

		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (screenSize < 768) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="container-dashnav">
			<div className={`dashnav `}>
				<div className="menu-icon" onClick={toggleMenu}>
					☰
				</div>
				{!activeMenu && isOpen && (
					<div className="open-nav">
						<div className="bottom-wrap">
							<div className="comp-wrap comp">
								<Link
									to="/Dashboard"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h2 className="comp-ele">PickUp</h2>
								</Link>
								<Link
									to="/History"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h2 className="comp-ele">History</h2>
								</Link>
								<Link
									to="/Reward"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h2 className="comp-ele">Reward</h2>
								</Link>
							</div>
							<div className="comp-wrap func">
								<Link
									to="/"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h3 className="func-ele">Log Out</h3>
								</Link>
								<Link
									to="/"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h3 className="func-ele">
										Back to home page
									</h3>
								</Link>
							</div>
						</div>
					</div>
				)}
				{activeMenu && (
					<>
						<div className="logo-container-dash">
							<div className="logo-dash">
								<img
									src={MyImageSvg}
									alt="logo"
									className="symbol-dash"
								/>
								<div className="logo_text-dash">Greenify</div>
							</div>
						</div>

						<div className="bottom-wrap">
							<div className="comp-wrap comp">
								<Link
									to="/Dashboard"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h2 className="comp-ele">PickUp</h2>
								</Link>
								<Link
									to="/History"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h2 className="comp-ele">History</h2>
								</Link>
								<Link
									to="/Reward"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h2 className="comp-ele">Reward</h2>
								</Link>
							</div>
							<div className="comp-wrap func">
								<Link
									to="/"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h3 className="func-ele">Log Out</h3>
								</Link>
								<Link
									to="/"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<h3 className="func-ele">
										Back to home page
									</h3>
								</Link>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default DashNav;
