//Load environment variable
import { config } from "dotenv";
config();

// Import express and cors
import express from "express";
import cors from "cors";

// Set up express
const app = express();
app.disable("x-powered-by");
app.use(cors());
// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

//Add routers below:
app.get("/restaurants", async function (req, res) {
  try {
    const response = await fetch(
      "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log(response);

    if (data.restaurants.length === 0) {
      return res
        .status(404)
        .json({ error: "No restaurants found for this location" });
    }
    const filteredRestaurants = data.restaurants
      .map((restaurant) => ({
        name: restaurant.name,
        cuisines: restaurant.cuisines,
        rating: restaurant.rating.starRating,
        address: restaurant.address,
      }))
      .slice(0, 10);
    res.status(200).json(filteredRestaurants);
  } catch (error) {
    console.log(error);
    res.status(500).json({ Error: error.message });
  }
});

app.get("*", (req, res) => {
  res.json({ ok: true });
});

// Start API server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`\n Server is running on http://localhost:${PORT}\n`);
});
