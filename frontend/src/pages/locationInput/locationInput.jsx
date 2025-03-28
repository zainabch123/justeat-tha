import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

import "./locationInput.css";

const LocationInput = () => {
  const { setRestaurantData, setRestaurantsToDisplay, fetchRestaurants } = useContext(AppContext);
  const navigate = useNavigate();
  const [locationInput, setLocationInput] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    if (!locationInput) return;
    setLoading(true);

    try {
      const data = await fetchRestaurants(locationInput);
      setLoading(false);

      if (data.data) {
        setRestaurantData(data.data);
        setRestaurantsToDisplay(data.data);
        setLocationInput("");
        navigate("/dashboard");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred. Please try again.");
    }
  };

  function handleInput(event) {
    setLocationInput(event.target.value);
  }

  return (
    <div className="location-input-page">
      <div className="location-input-card">
        <h2>Find Restaurants Near You...</h2>
        <div className="location-input-wrapper">
          <input
            type="text"
            id="location-input"
            name="location-input"
            placeholder="e.g. EC4M 7RF"
            value={locationInput || ""}
            onChange={handleInput}
          ></input>

          {loading ? (
            <button id="location-input-button" type="button">
              <div className="loading-spinner"></div>
            </button>
          ) : (
            <button
              id="location-input-button"
              type="button"
              onClick={handleClick}
            >
              Search
            </button>
          )}
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default LocationInput;
