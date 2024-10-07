// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Work from './components/Work';
import Collect from './components/Collect';
import Bechange from './components/Bechange';
import Footernew from './components/Footernew';
import Getstarted from './components/Getstarted';
import SignUp from './components/SignUp';
import Forgetpass from './components/ForgetPass';

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
              <Bechange />
              <Footernew />
            </>
          } />
          <Route path="/Getstarted" element={<Getstarted />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Forgetpass" element={<Forgetpass />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
