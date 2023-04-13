import React, { useState } from 'react';
import logo from '../pictures/frigo.png';
import './style.scss';
import { Link } from 'react-router-dom';



const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuToggle = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
  }

  return (
    <header className="header">
      <div className="burger-icon" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={`sidenav ${isActive ? "active" : ""}`}>
        <div className="close" onClick={handleMenuToggle}>
          &times;
        </div>
        <ul>
          <li>
            <Link to="/profil" onClick={handleLinkClick}>Profil</Link>
          </li>
          <li>
            <Link to="/accueil" onClick={handleLinkClick}>Accueil</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
          <li>
            <Link to="/deconnexion" onClick={handleLinkClick}>Deconnexion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
