import RestaurantListItem from "./restaurantListItem";

const RestaurantList = ({ restaurantsToDisplay }) => {
  return (
    <ul className="restaurants-grid">
      {restaurantsToDisplay.map((restaurant, index) => (
        <RestaurantListItem key={index} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default RestaurantList;
