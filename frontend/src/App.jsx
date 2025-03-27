import { Routes, Route } from "react-router-dom";
import LocationInputPage from "./pages/locationInputPage";
import DashboardPage from "./pages/dashboardPage";

import { useEffect, useState } from "react";
import foodImg from "./assets/foodImg.jpg";
import SearchIcon from "./assets/searchIcon";
import StarIcon from "./assets/starIcon";
import "./App.css";

const PORT = import.meta.env.VITE_PORT;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LocationInputPage />}></Route>
      <Route path="dashboard" element={<DashboardPage />}></Route>
    </Routes>
  );
};

export default App;
