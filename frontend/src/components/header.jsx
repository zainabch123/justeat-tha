import SearchIcon from "../assets/searchIcon.jsx";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="header-logo">Logo</div>
        <div className="search-bar-section">
          <div className="search-input-wrapper">
            <input
              type="text"
              id="search-bar"
              name="search-bar"
              placeholder="Search locations..."
            ></input>
            <button id="search-bar-button" type="button">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="profile-circle">
          <p>DP</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
