import React from 'react';
import './SearchBar.css';
import icon from '../../assets/icon.svg';
import { ISearchBar } from 'types/types';

function SearchBar(props: ISearchBar) {
  const { setQuery, onSubmit, query } = props;

  return (
    <div className="search">
      <form className="search__container" onSubmit={handleSubmit}>
        <p className="search__title">I want to find</p>
        <img className="search__image" src={icon} alt="icon" onClick={handleSubmit} />
        <input
          className="search__bar"
          type="text"
          value={query}
          autoFocus
          spellCheck="false"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
