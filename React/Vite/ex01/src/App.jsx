import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Market from "./pages/extar/Market";
import Design from "./pages/extar/Design";
import System from "./pages/extar/System";
import { Routes, Route } from "react-router-dom";
import './App.css'
function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/market" element={<Market />} />
            <Route path="/services/design" element={<Design />} />
            <Route path="/services/system" element={<System />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
