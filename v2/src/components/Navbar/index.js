import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <header id="header">
      <svg class="waveUp1" viewBox="0 60 760 350" preserveAspectRatio="none">
        <path
          d="M-0.27,144.56 C72.51,101.14 280.76,159.38 173.53,-0.48 L256.49,0.50 L0.00,0.00 Z"
          style={{ fill: "#ff9786" }}
        ></path>
      </svg>
      <svg class="waveUp2" viewBox="40 -20 550 150" preserveAspectRatio="none">
        <path
          d="M-2.54,44.89 C89.45,37.00 216.98,68.58 172.96,-5.42 L172.40,-4.44 L0.00,0.00 Z"
          style={{ fill: "#FFDC7C" }}
        ></path>
      </svg>
      <div class="navigationBar">
        <div class="logoContainer">
          <a href="./home_page.html">
            <img src="./images/logo.svg" alt="Logo" class="logo" />
          </a>
        </div>
        <nav>
          <li class="linkContainer">
            <a href="./home_page.html" class="link ">
              Home
            </a>
            <span></span>
          </li>
          <li class="linkContainer ">
            <a class="link" href="google.com">
              Blogs
            </a>
            <span class="active"></span>
          </li>
          <li class="linkContainer">
            <a class="link" href="./pets.html">
              Pets
            </a>
            <span></span>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
