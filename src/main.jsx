import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home.jsx";
import Espacios from "./pages/espacios.jsx";
import Arte from "./pages/arte.jsx";
import Diseño from "./pages/diseño.jsx";
import "./index.css";

import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero";
import Quienes from "./pages/quienes.jsx";
import Servicios from "./pages/servicios.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/espacios" element={<Espacios />} />
        <Route exact path="/arte" element={<Arte />} />
        <Route exact path="/diseño" element={<Diseño />} />
        <Route exact path="/quienes" element={<Quienes />} />
        <Route exact path="/servicios" element={<Servicios />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
