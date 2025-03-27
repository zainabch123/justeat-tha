import { useEffect, useState } from "react";
import foodImg from "../../assets/foodImg.jpg";
import SearchIcon from "../../assets/searchIcon";
import StarIcon from "../../assets/starIcon";
import "./dashboard.css"

const PORT = import.meta.env.VITE_PORT;

const DashboardPage = ({ restaurants, port }) => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:${PORT}/restaurants`);

  //       const data = await response.json();

  //       setRestaurants(data.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  console.log(restaurants);
  return (
    <main className="container">
      <header>
        <div className="header-content">
          <div className="header-logo">Logo</div>
          <div className="search-bar-section">
            <div className="search-input-wrapper">
              <input
                type="text"
                id="search-bar"
                name="search-bar"
                placeholder="Search locations..."
              ></input>
              <button id="search-bar-button" type="button">
                <SearchIcon />
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
                  <div className="restaurant-title-section">
                    <h3 className="restaurant-title">
                      {restaurant.name.split(/[-–,]/)[0].trim()}
                    </h3>
                    <div className="restaurant-rating-section">
                      <StarIcon />
                      <p className="restaurant-rating-p">
                        <strong>{restaurant.rating}</strong>
                      </p>
                    </div>
                  </div>
                  <p className="restaurant-cuisines-p">
                    {restaurant.cuisines.join(" | ")}
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
};

export default DashboardPage;
