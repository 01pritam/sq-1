import React from "react";
import "./navbar.css";
import logo from "../img/logo1.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container">
          <a class="navbar-brand" href="/">
            sQuare
            <img className="brand-logo" src={logo} alt="Logo" />
          </a>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#events">
                Events
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
