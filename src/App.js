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

        </Routes>
      </div>
    </Router>
  );
}

export default App;
