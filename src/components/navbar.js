import React from "react";
import "./navbar.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container">
      {/* First Row: Logo and Sign-In/Sign-Up */}
      <div className="navbar-top">
        <div className="logo">
          <h3>FURNITURE</h3>
        </div>

        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>

      {/* Second Row: Navbar Links and Icons */}
      <div className="navbar-bottom">
        <ul className="navbar">
          <li>
            <a id="active" href=" ">
              Home
            </a>
          </li>
          <li>
            <a href=" ">About</a>
          </li>
          <li>
            <a href=" ">Contact</a>
          </li>
        </ul>

        <div className="icons">
          <FaHeart size={20} style={{ marginRight: "10px" }} />
          <FaShoppingCart size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
