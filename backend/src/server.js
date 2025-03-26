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

import { createError } from "./utils/errorUtils.js";

//Add routers below:
app.get("/restaurants", async function (req, res, next) {
  try {
    const response = await fetch(
      "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"
    );

    if (!response.ok) {
      const error = createError(
        `Failed to fetch: ${response.statusText}`,
        response.status
      );
      return next(error);
    }

    const data = await response.json();

    if (data.restaurants.length === 0) {
      const error = createError("No restaurants found for this location", 404);
      return next(error);
    }

    const filteredRestaurants = data.restaurants
      .map((restaurant) => ({
        name: restaurant.name,
        cuisines: restaurant.cuisines.map((cuisine) => cuisine.name),
        rating: restaurant.rating.starRating.toFixed(1),
        address: restaurant.address,
        imgUrl: restaurant.logoUrl,
      }))
      .slice(0, 10);
    res.status(200).json({ data: filteredRestaurants });
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong!";

  res.status(statusCode).json({ error: message });
});

app.get("*", (req, res) => {
  res.json({ ok: true });
});

// Start API server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`\n Server is running on http://localhost:${PORT}\n`);
});
