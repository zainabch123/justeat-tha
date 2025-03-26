import { useEffect, useState } from "react";
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
      <header style={{ border: "2px solid black" }}>Header</header>
      <aside className="left-sidebar">Sidebar</aside>
      <div
        className="overflow-container"
        style={{ border: "2px solid lightblue" }}
      >
        <ul className="restaurants-grid">
          {restaurants.map((restaurant, index) => (
            <li key={index} className="restaurant-card">
              <div className="restaurant-card-image">
                {restaurant.imgUrl ? (
                  <img src={restaurant.imgUrl} alt="Restaurant Image" />
                ) : (
                  <div className="placeholder">No Image Available</div>
                )}
              </div>
              <div className="restaurant-card-info">
                <h3>{restaurant.name.split("- ")[0].trim()}</h3>
                <p>{restaurant.cuisines.join(" | ")}</p>
                <p>
                  <strong>{restaurant.rating}</strong>
                </p>
                <p>{restaurant.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
