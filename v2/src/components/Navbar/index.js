import React from "react";
import { Link } from 'react-router-dom'
import "./navbar.css";
const Navbar = () => {
  const [navbarActive, setNavbarActive] = React.useState('home')
  return (
    <header id="header">
      <svg className="waveUp1" viewBox="0 60 760 350" preserveAspectRatio="none">
        <path
          d="M-0.27,144.56 C72.51,101.14 280.76,159.38 173.53,-0.48 L256.49,0.50 L0.00,0.00 Z"
          style={{ fill: "#ff9786" }}
        ></path>
      </svg>
      <svg className="waveUp2" viewBox="40 -20 550 150" preserveAspectRatio="none">
        <path
          d="M-2.54,44.89 C89.45,37.00 216.98,68.58 172.96,-5.42 L172.40,-4.44 L0.00,0.00 Z"
          style={{ fill: "#FFDC7C" }}
        ></path>
      </svg>
      <div className="navigationBar">
        <div className="logoContainer">
          <Link to="/home" className='link' onClick={()=>setNavbarActive('home')}>
            <img src="./images/logo.svg" alt="Logo" className="logo" />
          </Link>
        </div>
        <nav>
          <li className="linkContainer">
            <Link to="/home" className="link" onClick={()=>setNavbarActive('home')}>
              Home
            </Link>
            <span className={navbarActive === 'home' ? 'active': ''}></span>
          </li>
          <li className="linkContainer ">
            <Link className="link" to="/animal-care" onClick={()=>setNavbarActive('animal-care')}>
              Animal care
            </Link>
            <span className={navbarActive === 'animal-care' ? 'active': ''}></span>
          </li>
          <li className="linkContainer">
            <Link className="link"  to="/pets" onClick={()=>setNavbarActive('pets')}>
              Pets
            </Link>
            <span className={navbarActive === 'pets' ? 'active': ''}></span>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
