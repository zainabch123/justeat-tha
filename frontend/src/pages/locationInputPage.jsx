import SearchIcon from "../assets/searchIcon";

const LocationInputPage = () => {
  return (
    <main className="location-input-page">
      <div className="location-input-card">
        <h2>Find Restaurants Near You...</h2>
        <div className="location-input-wrapper">
          <input
            type="text"
            id="location-input"
            name="location-input"
            placeholder="e.g. EC4M 7RF"
          ></input>
          <button id="location-input-button" type="submit">
            Search
          </button>
        </div>
      </div>
    </main>
  );
};

export default LocationInputPage;
