import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="menus">
          <ul className="menu">
            <li>
              <Link to="/" className="logo">
                TMDB
              </Link>
            </li>
            <li>
              <Link to="/">Movies</Link>
            </li>
            <li>
              <Link to="/tvshows">TV Shows</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/more">More</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="settingsMenus">
        <ul className="settingMenu ">
          <li>
            <Link to="/#">
              <b>+</b>
            </Link>
          </li>
          <li>
            <Link to="/#">Language</Link>
          </li>
          <li>
            <Link to="/#">Login</Link>
          </li>
          <li>
            <Link to="/#">JoinTMDb</Link>
          </li>
          <li>
            <Link to="/#">search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;