import React from "react";
import DashNav from "./DashNav";
import "./Dashboard.css";
import Pickup from "./Pickup";

const Dashboard = () => {
	return (
		<div className="dash-container">
			<div className="navbar-dash ">
				<DashNav />
			</div>
			<div className="mainContent-container">
				<Pickup />
			</div>
		</div>
	);
};

export default Dashboard;
