import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import About from "./pages/About";
import Location from "./pages/location/location";
import "./index.scss"; // Import global SCSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router>
  );
};

export default App;
