import { Routes, Route } from "react-router-dom";
import LocationInput from "./pages/locationInput/locationInput";
import Dashboard from "./pages/dashboard/dashboard";

import { useEffect, useState } from "react";
import foodImg from "./assets/foodImg.jpg";
import SearchIcon from "./assets/searchIcon";
import StarIcon from "./assets/starIcon";
import "./App.css";



const PORT = import.meta.env.VITE_PORT;

const App = () => {
  const [restaurants, setRestaurants] = useState([]);


  return (
    <Routes>
      <Route
        path="/"
        element={
          <LocationInput
            restaurants={restaurants}
            setRestaurants={setRestaurants}
            port={PORT}
          />
        }
      ></Route>
      <Route
        path="dashboard"
        element={<Dashboard restaurants={restaurants} port={PORT} />}
      ></Route>
    </Routes>
  );
};

export default App;
