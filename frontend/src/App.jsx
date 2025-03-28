import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LocationInput from "./pages/locationInput/locationInput";
import Dashboard from "./pages/dashboard/dashboard";
import { AppContext } from "./utils/appContext";
import "./App.css";

const PORT = import.meta.env.VITE_PORT;

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantsToDisplay, setRestaurantsToDisplay] = useState([]);

  const fetchRestaurants = async (searchInput) => {
    const response = await fetch(
      `http://localhost:${PORT}/restaurants?searchQuery=${searchInput}`
    );

    return await response.json();
  };
  return (
    <AppContext.Provider
      value={{
        fetchRestaurants,
        setRestaurantData,
        restaurantData,
        restaurantsToDisplay,
        setRestaurantsToDisplay,
      }}
    >
      <Routes>
        <Route path="/" element={<LocationInput />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
