import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <NavLink className="header__title" to="/">
          Rick and Morty
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
