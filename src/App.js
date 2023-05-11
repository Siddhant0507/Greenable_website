import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Screens/Homepage";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import EVcharging from './Screens/EVcharging';
import SolarPanel from './Screens/SolarPanel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About/>} />
        <Route path="SolarPanel" element={<SolarPanel />} />
        <Route path="EVcharging" element={<EVcharging />} />  
    </Routes>
  </BrowserRouter>
  );
}

export default App;
