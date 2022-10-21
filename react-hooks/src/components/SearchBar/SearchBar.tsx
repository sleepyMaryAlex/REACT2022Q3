import React from 'react';
import './SearchBar.css';
import icon from '../../assets/icon.svg';
import { ISearchBar } from 'types/types';

function SearchBar(props: ISearchBar) {
  const { handleChange, handleSubmit, query } = props;
  return (
    <div className="search">
      <div className="search__container">
        <p className="search__title">I want to find</p>
        <img className="search__image" src={icon} alt="icon" onClick={handleSubmit} />
        <input
          className="search__bar"
          type="text"
          value={query}
          autoFocus
          spellCheck="false"
          onChange={handleChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
