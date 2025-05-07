import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Market from "./pages/extar/Market";
import Design from "./pages/extar/Design";
import System from "./pages/extar/System";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

/**
 * Main application component that handles routing and layout
 * @returns {JSX.Element} The rendered application
 */
function App() {
  return (
    <div className="App">
      {/* Navigation header */}
      <NavBar />
      
      {/* Main content area */}
      <main className="container py-4">
        <Routes>
          {/* Primary routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Service sub-routes */}
          <Route path="/services/market" element={<Market />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/system" element={<System />} />
          
          {/* Fallback route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {/* Page footer */}
      <Footer />
    </div>
  );
}

export default App;