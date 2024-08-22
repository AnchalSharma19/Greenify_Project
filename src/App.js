// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Work from './components/Work';
import Collect from './components/Collect';
import Impact from './components/Impact';
import Testimonials from './components/Testimonials';
import Bechange from './components/Bechange';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Footernew from './components/Footernew';
import Getstarted from './components/Getstarted';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <AboutUs />
              <Work />
              <Collect />
              <Impact />
              <Testimonials />
              <Bechange />
              <Contact />
              <Footer />
              <Footernew />
            </>
          } />
          <Route path="/Getstarted" element={<Getstarted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
