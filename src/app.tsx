import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/accueil";
import About from "./pages/about/about";
import Location from "./pages/location/location";
import Error from "./pages/error/error";
import "./index.scss"; // Import global SCSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
