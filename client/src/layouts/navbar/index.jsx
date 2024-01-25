import React, { useEffect, useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import MobileNav from "../../components/mobileNav";

function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <h1>
            Pulse <span style={{ color: "#FFC515", fontSize: "2em" }}>.</span>
          </h1>
        </div>
        <ul className="nav-texts">
          <li>
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/add"} className="nav-link">
              Add Page
            </NavLink>
          </li>
          <li>
            <NavLink to={"/cart"} className="nav-link">
              Basket
            </NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"} className="nav-link">
              Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink to={"/news"} className="nav-link">
              News
            </NavLink>
          </li>
        </ul>
        <div className="call">
          <p>Reservation</p>
          <i className="fa-solid fa-phone"></i>
          <span>+994 505798656</span>
        </div>
        <i
          onClick={() => setIsNavActive(!isNavActive)}
          className={`fa-solid ${isNavActive ? "fa-xmark" : "fa-bars"}`}
        ></i>
      </div>
      <MobileNav isNavActive={isNavActive} />
    </nav>
  );
}

export default Navbar;
