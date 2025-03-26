import { useEffect, useState } from "react";
import foodImg from "./assets/foodImg.jpg";
import "./App.css";

const PORT = import.meta.env.VITE_PORT;

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:${PORT}/restaurants`);

        const data = await response.json();

        setRestaurants(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(restaurants);

  return (
    <main className="container">
      <header>
        <div className="header-content">
          <div className="header-logo">Logo</div>
          <div className="search-section">
            <div className="search-bar-wrapper">
              <input
                type="text"
                id="search-bar"
                name="search-bar"
                placeholder="Search locations..."
              ></input>
              <button id="search-bar-button" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  width="25px"
                  height="25px"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="profile-circle">
            <p>DP</p>
          </div>
        </div>
      </header>
      <div className="overflow-container">
        <div className="content-wrapper">
          <aside className="left-sidebar">Sidebar</aside>
          <ul className="restaurants-grid">
            {restaurants.map((restaurant, index) => (
              <li key={index} className="restaurant-card">
                <div className="restaurant-card-image">
                  <img src={foodImg} />
                </div>
                {restaurant.imgUrl && (
                  <div className="restaurant-logo-wrapper">
                    <img
                      className="restaurant-logo"
                      src={restaurant.imgUrl}
                      alt="Restaurant Image"
                    />
                  </div>
                )}
                <div className="restaurant-card-info">
                  <h3 className="restaurant-title">
                    {restaurant.name.split("- ")[0].trim()}
                  </h3>
                  <p className="restaurant-cuisines-p">
                    {restaurant.cuisines.join(" | ")}
                  </p>
                  <p className="restaurant-rating-p">
                    <strong>{restaurant.rating}</strong>
                  </p>
                  <p className="restaurant-address-p">{restaurant.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;
