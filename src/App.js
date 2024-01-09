import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route as RouteDOM } from 'react-router-dom';
import NavBar from './pages/NavBar/NavBar';
import Home from './pages/Home/Home';
import Properties from './pages/Properties/Properties';
import ContactUs from './pages/ContactUs/ContactUs';
import About from './pages/About/About';
import Footer from './pages/Footer/Footer';
import PropertiesDetails from './pages/PropertiesDetails/PropertiesDetails';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <RouteDOM path="/" element={<Home />} />
        <RouteDOM path="/properties" element={<Properties />} />
        <RouteDOM path="/contact" element={<ContactUs />} />
        <RouteDOM path="/about" element={<About />} />
        <RouteDOM path="/properties/:id" element={<PropertiesDetails />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
