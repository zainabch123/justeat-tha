import { createError } from "../utils/errorUtils.js";
import { formatAddress } from "../utils/addressFormatter.js";

const getRestaurantData = async (req, res, next) => {
  try {
    const searchQuery = req.query.searchQuery;
    const response = await fetch(
      `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${searchQuery}`
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
        rating:
          restaurant.rating.starRating > 0
            ? restaurant.rating.starRating.toFixed(1)
            : restaurant.rating.starRating,
        address: formatAddress(restaurant.address),
        imgUrl: restaurant.logoUrl ? restaurant.logoUrl : null,
      }))
      .slice(0, 10);
    res.status(200).json({ data: filteredRestaurants });
  } catch (error) {
    next(error);
  }
};

export { getRestaurantData };
