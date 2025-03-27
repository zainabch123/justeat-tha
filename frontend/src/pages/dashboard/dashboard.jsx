import Header from "../../components/header";
import RestaurantList from "../../components/restaurantsList";
import "./dashboard.css"

const DashboardPage = ({ restaurants }) => {

  return (
    <div className="dashboard-page">
      <Header/>
      <div className="overflow-container">
        <div className="content-wrapper">
          <RestaurantList restaurants={restaurants}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
