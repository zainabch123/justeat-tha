import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./locationInput.css";

const LocationInput = ({ restaurants, setRestaurants, port }) => {
  const navigate = useNavigate();
  const [locationInput, setLocationInput] = useState("");
  const [error, setError] = useState(null);

  const handleClick = async (event) => {
    event.preventDefault();
    if (!locationInput) return;

    try {
      const response = await fetch(
        `http://localhost:${port}/restaurants?searchQuery=${locationInput}`
      );
      const data = await response.json();
      console.log(data);
      setRestaurants(data.data);

      if (data.data) {
        setLocationInput("");
        navigate("/dashboard");
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred trying to search your postcode. Please try again.");
    }
  };

  function handleInput(event) {
    setLocationInput(event.target.value);
  }

  console.log(locationInput);
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
          <button
            id="location-input-button"
            type="button"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default LocationInput;
