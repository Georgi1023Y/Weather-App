import React from "react";
// Importing React Router
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Importing all needed components for my web app
import Welcome from "./components/Welcome";
import Weather from "./components/Weather";
import Cities from "./components/Cities";
import Map from "./components/Map";
import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<Weather />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/map" element={<Map />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
