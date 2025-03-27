import foodImg from "../assets/foodImg.jpg";
import StarIcon from "../assets/starIcon";

const RestaurantListItem = ({ restaurant }) => {
  return (
    <li className="restaurant-card">
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
  );
};

export default RestaurantListItem;
