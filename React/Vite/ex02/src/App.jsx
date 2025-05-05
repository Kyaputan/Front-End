// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioNavbar from './components/navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/contact';

const App = () => {
  return (
    <Router>
      <div className="flex-wrapper">
        <div className="content">
          <PortfolioNavbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
