import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'hooks/hooks';
import { selectIndex, selectResults } from 'store/mainSlice';

function Header() {
  const index = useAppSelector(selectIndex);
  const results = useAppSelector(selectResults);

  return (
    <div className="header">
      <div className="wrapper">
        <NavLink className="title" to="/">
          Rick and Morty
        </NavLink>
        <div className="nav">
          <NavLink
            className={(navData) => (navData.isActive ? 'item-active' : 'nav-item')}
            to="/characters"
          >
            Characters
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? 'item-active' : 'nav-item')}
            to="/details"
          >
            {`About character ${
              index !== null ? `(${results[index as number].name.slice(0, 10)}...)` : ''
            }`}
          </NavLink>
          <NavLink
            className={(navData) => (navData.isActive ? 'item-active' : 'nav-item')}
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
