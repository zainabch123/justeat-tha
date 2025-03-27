import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const Header = () => {
  const { setRestaurants, fetchRestaurants } = useContext(AppContext);
  const [headerInput, setHeaderInput] = useState("");
  const [headerError, setHeaderError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    if (!headerInput) return;
    setLoading(true);

    try {
      const data = await fetchRestaurants(headerInput);
      setLoading(false);

      if (data.data) {
        setRestaurants(data.data);
        setHeaderInput("");
      } else {
        setHeaderError(data.error);
      }
    } catch (error) {
      console.log(error);
      setHeaderError("An error occurred. Please try again.");
    }
  };

  function handleInput(event) {
    setHeaderInput(event.target.value);
  }

  return (
    <header>
      <div className="header-content">
        <div className="header-logo">
          <Link to="/">
            <h2>JE</h2>
          </Link>
        </div>
        <div className="search-bar-section">
          <div className="search-input-wrapper">
            <input
              type="text"
              id="search-bar"
              name="search-bar"
              placeholder="Search locations..."
              value={headerInput || ""}
              onChange={handleInput}
            ></input>
            {loading ? (
              <button id="search-bar-button" type="button">
                <div className="loading-spinner"></div>
              </button>
            ) : (
              <button
                id="search-bar-button"
                type="button"
                onClick={handleClick}
              >
                Search
              </button>
            )}
          </div>
        </div>
        <div className="profile-circle">
          <p>NU</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
