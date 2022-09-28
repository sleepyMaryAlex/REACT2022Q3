import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__wrapper">
          <NavLink className="header__title" to="/">
            SPOONACULAR.
          </NavLink>
          <div className="header__nav">
            <p className="nav__item">COISINE</p>
            <p className="nav__item">DIET</p>
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
