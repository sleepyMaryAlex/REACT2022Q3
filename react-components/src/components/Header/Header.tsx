import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'hooks/hooks';
import { selectIndex, selectResults } from 'store/mainSlice';

function Header() {
  const index = useAppSelector(selectIndex);
  const results = useAppSelector(selectResults);

  return (
    <div className="header">
      <div className="header__wrapper">
        <NavLink className="header__title" to="/">
          Rick and Morty
        </NavLink>
        <div className="header__nav">
          <NavLink
            className={(navData) => (navData.isActive ? 'nav__item_active' : 'nav__item')}
            to="/characters"
          >
            Characters
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? 'nav__item_active' : 'nav__item')}
            to="/details"
          >
            {`About character ${
              index !== null ? `(${results[index as number].name.slice(0, 10)}...)` : ''
            }`}
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? 'nav__item_active' : 'nav__item')}
            to="/about"
          >
            About us
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
