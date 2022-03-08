import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import Navbar from "./components/Navbar";
import TvShows from "./screens/TvShows";
import People from "./screens/People";
import More from "./screens/More";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/people" element={<People />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;
