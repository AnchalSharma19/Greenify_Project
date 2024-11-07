// App.js
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Bechange from "./components/Bechange";
import ClothesTextiles from "./components/ClothesTextiles";
import Collect from "./components/Collect";
import ContactUs from "./components/ContactUs";
import Dashboard from "./components/Dashboard";
import EWaste from "./components/EWaste";
import Forgetpass from "./components/ForgetPass";
import Getstarted from "./components/Getstarted";
import Glass from "./components/Glass";
import Hero from "./components/Hero";
import HowToPack from "./components/HowToPack";
import Layout from "./components/Layout";
import Metal from "./components/Metal";
import Misfits from "./components/Misfits";
import OurApproach from "./components/OurApproach";
import Paper from "./components/Paper";
import Process from "./components/Process";
import Recycle from "./components/Recycle";
import RecycleProcess from "./components/RecycleProcess";
import Rubber from "./components/Rubber";
import SignUp from "./components/SignUp";
import Slot from "./components/Slot";
import SoftPlastic from "./components/SoftPlastic";
import Sustainability from "./components/Sustainability";
import Team from "./components/Team";
import WhatWeCollect from "./components/WhatWeCollect";
import Work from "./components/Work";

import ChatBot from "./components/chatbot";

import DashNav from "./components/DashNav";
import History from "./components/Histroy";
import Reward from "./components/Reward";

import "./App.css";
import Confirmation from "./components/Confirmation";
import Congratulation from "./components/Congratulation";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{/* Main Layout Routes */}
					<Route
						path="/"
						element={
							<Layout>
								<Hero />
								<AboutUs />
								<Work />
								<Collect />
								<RecycleProcess />
								<Bechange />
							</Layout>
						}
					/>
					<Route
						path="/Getstarted"
						element={
							<Layout>
								<Getstarted />
							</Layout>
						}
					/>
					<Route
						path="/SignUp"
						element={
							<Layout>
								<SignUp />
							</Layout>
						}
					/>
					<Route
						path="/Forgetpass"
						element={
							<Layout>
								<Forgetpass />
							</Layout>
						}
					/>
					<Route
						path="/Team"
						element={
							<Layout>
								<Team />
							</Layout>
						}
					/>
					<Route
						path="/OurApproach"
						element={
							<Layout>
								<OurApproach />
							</Layout>
						}
					/>
					<Route
						path="/HowToPack"
						element={
							<Layout>
								<HowToPack />
							</Layout>
						}
					/>
					<Route
						path="/Recycle"
						element={
							<Layout>
								<Recycle />
							</Layout>
						}
					/>
					<Route
						path="/Process"
						element={
							<Layout>
								<Process />
							</Layout>
						}
					/>
					<Route
						path="/WhatWeCollect"
						element={
							<Layout>
								<WhatWeCollect />
							</Layout>
						}
					/>
					<Route
						path="/Misfits"
						element={
							<Layout>
								<Misfits />
							</Layout>
						}
					/>
					<Route
						path="/SoftPlastic"
						element={
							<Layout>
								<SoftPlastic />
							</Layout>
						}
					/>
					<Route
						path="/EWaste"
						element={
							<Layout>
								<EWaste />
							</Layout>
						}
					/>
					<Route
						path="/Glass"
						element={
							<Layout>
								<Glass />
							</Layout>
						}
					/>
					<Route
						path="/Rubber"
						element={
							<Layout>
								<Rubber />
							</Layout>
						}
					/>
					<Route
						path="/Paper"
						element={
							<Layout>
								<Paper />
							</Layout>
						}
					/>
					<Route
						path="/Metal"
						element={
							<Layout>
								<Metal />
							</Layout>
						}
					/>
					<Route
						path="/ClothesTextiles"
						element={
							<Layout>
								<ClothesTextiles />
							</Layout>
						}
					/>
					<Route
						path="/Sustainability"
						element={
							<Layout>
								<Sustainability />
							</Layout>
						}
					/>
					<Route
						path="/ContactUs"
						element={
							<Layout>
								<ContactUs />
							</Layout>
						}
					/>

					{/* Dashboard Routes with DashNav */}
					<Route
						path="/Dashboard"
						element={
							<div className="dashboard-layout">
								<DashNav />{" "}
								{/* Sidebar that stays on every page */}
								<div className="main-content">
									<Dashboard />
								</div>
							</div>
						}
					/>
					<Route
						path="/Slot"
						element={
							<div className="dashboard-layout">
								<DashNav />
								<div className="main-content">
									<Slot />
								</div>
							</div>
						}
					/>
					<Route
						path="/Confirmation"
						element={
							<div className="dashboard-layout">
								<DashNav />
								<div className="main-content">
									<Confirmation />
								</div>
							</div>
						}
					/>
					<Route
						path="/Congratulation"
						element={
							<div className="dashboard-layout">
								<DashNav />
								<div className="main-content">
									<Congratulation />
								</div>
							</div>
						}
					/>
					<Route
						path="/History"
						element={
							<div className="dashboard-layout">
								<DashNav />
								<div className="main-content">
									<History />
								</div>
							</div>
						}
					/>
					<Route
						path="/Reward"
						element={
							<div className="dashboard-layout">
								<DashNav />
								<div className="main-content">
									<Reward />
								</div>
							</div>
						}
					/>
				</Routes>
				<ChatBot />
			</div>
		</Router>
	);
}

export default App;
