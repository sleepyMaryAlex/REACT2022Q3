import React from 'react';
import './SearchBar.css';
import icon from '../../assets/icons/icon.svg';
import { ISearchBar } from 'types/types';

class SearchBar extends React.Component<ISearchBar> {
  render() {
    return (
      <div className="search">
        <div className="search__container">
          <p className="search__title">I WANT TO MAKE</p>
          <img className="search__image" src={icon} alt="icon" />
          <input
            className="search__bar"
            type="text"
            value={this.props.value}
            autoFocus
            spellCheck="false"
            onChange={(e) => this.props.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
