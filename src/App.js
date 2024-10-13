// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Work from './components/Work';
import Collect from './components/Collect';
import Bechange from './components/Bechange';
import Getstarted from './components/Getstarted';
import SignUp from './components/SignUp';
import Forgetpass from './components/ForgetPass';
import Team from './components/Team';
import OurApproach from './components/OurApproach';
import HowToPack from './components/HowToPack';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Layout>
              <Hero />
              <AboutUs />
              <Work />
              <Collect />
              <Bechange />
            </Layout>
          } />
          <Route path="/Getstarted" element={<Layout><Getstarted /></Layout>} />
          <Route path="/SignUp" element={<Layout><SignUp /></Layout>} />
          <Route path="/Forgetpass" element={<Layout><Forgetpass /></Layout>} />
          <Route path="/Team" element={<Layout><Team /></Layout>} />
          { /*<Route path="/Hero" element={<Layout><Hero /></Layout>} /> */}
          <Route path="/OurApproach" element={<Layout><OurApproach /></Layout>} />
          <Route path="/HowToPack" element={<Layout><HowToPack /></Layout>} />
          {/* wwc */}
					<Route exact path="/WhatWeCollect" element={<Layout><WhatWeCollect /></Layout>}/>
					{/* What we collect items*/}
					<Route exact path="/Misfits" element={<Layout> <Misfits /></Layout>}/>
					<Route exact path="/SoftPlastic" element={ <Layout><SoftPlastic /></Layout>}/>
					<Route path="/EWaste" element={ <Layout> <EWaste /> </Layout>}/>
					<Route path="/ClothesTextiles" element={ <Layout> <ClothesTextiles /> </Layout>} />
					{/* sustainability */}
					<Route path="/Sustainability" element={ <Layout> <Sustainability /> </Layout> }/>
					{/* Contact us */}
					<Route path="/ContactUs" element={ <Layout> <ContactUs /> </Layout> }/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
