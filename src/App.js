// App.js
import React from "react";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Bechange from "./components/Bechange";
import Collect from "./components/Collect";
import Forgetpass from "./components/ForgetPass";
import Getstarted from "./components/Getstarted";
import Hero from "./components/Hero";
import HowToPack from "./components/HowToPack";
import Layout from "./components/Layout";
import OurApproach from "./components/OurApproach";
import SignUp from "./components/SignUp";
import Team from "./components/Team";
import Work from "./components/Work";

import Process from "./components/Process";
import Recycle from "./components/Recycle";
import RecycleProcess from "./components/RecycleProcess";

import ClothesTextiles from "./components/ClothesTextiles";
import ContactUs from "./components/ContactUs";
import EWaste from "./components/EWaste";
import Glass from "./components/Glass";
import Metal from "./components/Metal";
import Misfits from "./components/Misfits";
import Paper from "./components/Paper";
import Rubber from "./components/Rubber";
import SoftPlastic from "./components/SoftPlastic";
import Sustainability from "./components/Sustainability";
import WhatWeCollect from "./components/WhatWeCollect";

import Dashboard from "./components/Dashboard";
import Slot from "./components/Slot";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
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
					{/*<Route path="/Hero" element={<Layout><Hero /></Layout>} /> */}
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

					{/* wwc */}
					<Route
						exact
						path="/WhatWeCollect"
						element={
							<Layout>
								<WhatWeCollect />
							</Layout>
						}
					/>
					{/* What we collect items*/}
					<Route
						exact
						path="/Misfits"
						element={
							<Layout>
								<Misfits />
							</Layout>
						}
					/>
					<Route
						exact
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
					{/* sustainability */}
					<Route
						path="/Sustainability"
						element={
							<Layout>
								{" "}
								<Sustainability />{" "}
							</Layout>
						}
					/>
					{/* Contact us */}
					<Route
						path="/ContactUs"
						element={
							<Layout>
								{" "}
								<ContactUs />{" "}
							</Layout>
						}
					/>
					{/* Dashboard */}
					<Route path="/Dashboard" element={<Dashboard />} />
					<Route path="/Slot" element={<Slot />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
