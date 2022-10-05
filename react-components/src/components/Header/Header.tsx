import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__wrapper">
          <NavLink className="header__title" to="/">
            SPOONACULAR<span>.</span>
          </NavLink>
          <div className="header__nav">
            <NavLink
              className={(navData) => (navData.isActive ? 'nav__item_active' : 'nav__item')}
              to="/recipes"
            >
              RECIPES
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? 'nav__item_active' : 'nav__item')}
              to="/about"
            >
              ABOUT US
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
