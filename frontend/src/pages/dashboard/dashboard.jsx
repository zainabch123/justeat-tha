import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import Header from "../../components/header";
import RestaurantList from "../../components/restaurantsList";
import "./dashboard.css";

const DashboardPage = () => {
  const { restaurantData, restaurantsToDisplay, setRestaurantsToDisplay } =
    useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState("default");
  const [headerError, setHeaderError] = useState("");

  useEffect(() => {
    setSelectedOption("default");
  }, [restaurantData]);

  function sortProducts(event) {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === "name") {
      const sortedProducts = [...restaurantsToDisplay].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setRestaurantsToDisplay(sortedProducts);
    } else if (selectedValue === "rating") {
      const sortedProducts = [...restaurantsToDisplay].sort(
        (a, b) => b.rating - a.rating
      );
      setRestaurantsToDisplay(sortedProducts);
    } else {
      setRestaurantsToDisplay(restaurantData);
    }
  }

  return (
    <div className="dashboard-page">
      <Header setHeaderError={setHeaderError} />
      <div className="overflow-container">
        <div className="content-wrapper">
          <aside className="left-sidebar">
            <label htmlFor="sort-menu">Sort By: </label>
            <select
              name="sort-menu"
              id="sort-menu"
              value={selectedOption}
              onChange={sortProducts}
            >
              <option value="default">Select Type</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </aside>

          {headerError ? (
            <p className="error">{headerError}</p>
          ) : (
            <RestaurantList restaurantsToDisplay={restaurantsToDisplay} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
