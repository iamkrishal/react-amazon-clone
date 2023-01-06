import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__lineOne"> Hello </span>
          <span className="header__lineTwo"> Sign in </span>
        </div>

        <div className="header__option">
          <span className="header__lineOne"> Returns </span>
          <span className="header__lineTwo"> & Orders </span>
        </div>

        <div className="header__option">
          <span className="header__lineOne"> Your </span>
          <span className="header__lineTwo"> Prime </span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__lineTwo header__basketCount"> 0 </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
