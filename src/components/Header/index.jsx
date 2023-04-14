import React, { useState } from 'react';
import logo from '../pictures/frigo.png'; // Importation du logo
import './style.scss';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isActive, setIsActive] = useState(false); // Utilisation de useState pour gérer le menu mobile

  const handleMenuToggle = () => {
    setIsActive(!isActive); // Fonction qui change la valeur de isActive pour afficher ou cacher le menu mobile
  };

  const handleLinkClick = () => {
    setIsActive(false); // Fonction qui masque le menu mobile quand un lien est cliqué
  }

  return (
    <header className="header">
      <div className="menu-icon" onClick={handleMenuToggle}>
        <MenuIcon />
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" /> {/* Affichage du logo */}
      </div>
      <nav className={`sidenav ${isActive ? "active" : ""}`}>
        <div className="close" onClick={handleMenuToggle}>
          &times;
        </div>
        <ul>
          <li>
            <Link to="/profil" onClick={handleLinkClick}>Profil</Link> {/* Lien vers la page Profil */}
          </li>
          <li>
            <Link to="/accueil" onClick={handleLinkClick}>Accueil</Link> {/* Lien vers la page Accueil */}
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link> {/* Lien vers la page Contact */}
          </li>
          <li>
            <Link to="/deconnexion" onClick={handleLinkClick}>Deconnexion</Link> {/* Lien vers la page Deconnexion */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
