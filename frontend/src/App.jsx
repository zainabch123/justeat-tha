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
                <img src={foodImg}/>
                {/* {restaurant.imgUrl ? (
                  <img src={restaurant.imgUrl} alt="Restaurant Image" />
                ) : (
                  <div className="placeholder">No Image Available</div>
                )} */}
              </div>
              <div className="restaurant-card-info">
                <h3>{restaurant.name.split("- ")[0].trim()}</h3>
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
    </main>
  );
}

export default App;
