import RestaurantListItem from "./restaurantListItem";

const RestaurantList = ({ restaurants }) => {
  return (
    <ul className="restaurants-grid">
      {restaurants.map((restaurant, index) => (
        <RestaurantListItem key={index} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default RestaurantList;
