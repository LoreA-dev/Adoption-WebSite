import React from "react";
import { Link } from 'react-router-dom'
import "./navbar.css";
const Navbar = () => {
  const [navbarActive, setNavbarActive] = React.useState('home')
  return (
    <header id="header">
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
