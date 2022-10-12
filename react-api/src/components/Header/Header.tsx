import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__wrapper">
          <NavLink className="header__title" to="/">
            RICK AND MORTY<span>.</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
