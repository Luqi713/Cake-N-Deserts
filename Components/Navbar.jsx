import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="header">
      <a href="/" className="logo">
        <img src={logo} alt="" />
      </a>
      <ul className="nav-menu">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>All Items</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div className="nav-icons">
        <a>
          <i className="bx bx-user"></i>
        </a>
        <a>
          <i className="bx bx-cart"></i>
        </a>
        <div className="bx bx-menu" id="i-menu"></div>
      </div>
    </div>
  );
}

export default Navbar;
