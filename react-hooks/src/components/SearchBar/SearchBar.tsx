import React from 'react';
import './SearchBar.css';
import icon from '../../assets/icon.svg';
import { ISearchBar } from 'types/types';

class SearchBar extends React.Component<ISearchBar> {
  render() {
    return (
      <div className="search">
        <div className="search__container">
          <p className="search__title">I want to find</p>
          <img className="search__image" src={icon} alt="icon" onClick={this.props.handleSubmit} />
          <input
            className="search__bar"
            type="text"
            value={this.props.query}
            autoFocus
            spellCheck="false"
            onChange={this.props.handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                this.props.handleSubmit();
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
