import Header from "../../components/header";
import RestaurantList from "../../components/restaurantsList";
import "./dashboard.css"

const DashboardPage = ({ restaurants }) => {

  return (
    <div className="container">
      <Header/>
      <div className="overflow-container">
        <div className="content-wrapper">
          <aside className="left-sidebar">Sidebar</aside>
          <RestaurantList restaurants={restaurants}/>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
