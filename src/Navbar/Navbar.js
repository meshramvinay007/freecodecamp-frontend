import React from "react";
import { StyledNavbarComponent } from "./Navbar.styles";
import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = (props) => {
  const { handleSignOut = () => {}, isLoggedIn = false } = props;
  const location = useLocation();

  const pathName = location.pathname;

  console.log(pathName);
  return (
    <StyledNavbarComponent>
      <div className="navbar">
        <div className="nav-left">
          <div className="searchbar">
            <i className="fa-solid fa-search"></i>
            <input
              className="nav-searchbar-input"
              placeholder="Search 10,700+ tutorials"
            />
          </div>
          <p className="nav-name">
            freeCodeCamp {"("}
            <i className="fa-solid fa-fire"></i>
            {")"}{" "}
          </p>
        </div>

        <div className="nav-right-menu">
          <div className="globe-icon">
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className="menu">Menu</div>
          {!isLoggedIn && pathName !== "sign-in" && (
            <Link className="sign-in" to="/sign-in">
              Sign in
            </Link>
          )}
          {isLoggedIn && (
            <div className="sign-out" onClick={handleSignOut}>
              Sign Out
            </div>
          )}
        </div>
      </div>
    </StyledNavbarComponent>
  );
};

export default Navbar;
