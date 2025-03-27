import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import LocationInput from "./pages/locationInput/locationInput";
import Dashboard from "./pages/dashboard/dashboard";
import "./App.css";

const PORT = import.meta.env.VITE_PORT;
export const AppContext = createContext();

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async (searchInput) => {
    const response = await fetch(
      `http://localhost:${PORT}/restaurants?searchQuery=${searchInput}`
    );

    return await response.json();
  };
  return (
    <AppContext.Provider
      value={{ fetchRestaurants, setRestaurants, restaurants }}
    >
      <Routes>
        <Route path="/" element={<LocationInput />}></Route>
        <Route
          path="dashboard"
          element={<Dashboard restaurants={restaurants} />}
        ></Route>
      </Routes>
    </AppContext.Provider>
  );
};

export default App;
