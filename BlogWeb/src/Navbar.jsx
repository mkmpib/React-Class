import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const inputRef = useRef(null);

  const handleToggleTheme = () => {
    // setIsDarkMode(!isDarkMode);
    setIsDarkMode(prevMode => !prevMode);

  };
  useEffect(() => {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navlinks = document.querySelectorAll(".nav-link");
    
    if (isDarkMode) {
    
      body.style.backgroundColor = "#131313e1";
      body.style.color = 'white';
      navbar.style.backgroundColor = "#131313e1";
      // Apply style to all nav-link elements
      navlinks.forEach((link) => {
        link.style.color = "white";
      });
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
      navbar.style.backgroundColor = " rgb(121, 86, 154)";
      
    // Revert style for all nav-link elements
    navlinks.forEach((link) => {
      link.style.color = "black";
    });
    }
  }, [isDarkMode]);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://www.heromotocorp.com/content/dam/hero-aem-website/brand/logo/logo.svg"
              alt=""
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" to="/">
                New Launches
              </NavLink>
              <NavLink className="nav-link" to="/Bikes">
                Bikes
              </NavLink>
              <NavLink className="nav-link" to="/Services">
                Services
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About Us
              </NavLink>
              <NavLink className="nav-link" to="/Accessories">
                Accessories
              </NavLink>
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
             

              <button
                className={`slider-button ${isDarkMode ? "active" : ""}`}
                onClick={handleToggleTheme}
                aria-label="Toggle Dark Mode"
              ></button>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
