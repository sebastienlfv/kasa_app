import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav className="navigation-container">
      <img className="logo-kasa" src="./src/assets/logo_orange.png" alt="Logo" />
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;