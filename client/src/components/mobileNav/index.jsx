import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function MobileNav({ isNavActive }) {
  return (
    <div className={`mob-nav ${isNavActive ? "nav-active" : ""}`}>
      <ul className="mob-nav-texts">
        <li>
          <NavLink to={"/"} className="mob-nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="mob-nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/add"} className="mob-nav-link">
            Add Page
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"} className="mob-nav-link">
            Basket
          </NavLink>
        </li>
        <li>
          <NavLink to={"/wishlist"} className="mob-nav-link">
            Wishlist
          </NavLink>
        </li>
        <li>
          <NavLink to={"/news"} className="mob-nav-link">
            News
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
