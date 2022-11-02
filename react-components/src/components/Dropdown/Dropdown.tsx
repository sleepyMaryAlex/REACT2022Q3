import React from 'react';
import { IDropdown } from 'types/types';
import './Dropdown.css';

class Dropdown extends React.Component<IDropdown> {
  cuisine: string[];
  diet: string[];
  constructor(props: IDropdown) {
    super(props);
    this.cuisine = [
      'ALL CUISINES',
      'AFRICAN',
      'AMERICAN',
      'BRITISH',
      'CHINESE',
      'GERMAN',
      'ITALIAN',
      'JAPANESE',
      'NORDIC',
    ];
    this.diet = [
      'ALL DIETS',
      'GLUTEN FREE',
      'KETOGENIC',
      'VEGETARIAN',
      'PRIMAL',
      'VEGAN',
      'PALEO',
      'LOW FODMAP',
      'WHOLE30',
    ];
  }

  render() {
    return (
      <div className="cards__results">
        <p className="results__title">{this.props.cards.length} RESULTS</p>
        <div className="selects">
          <select
            className="select__coisine"
            value={this.props.cuisine}
            onChange={(event) => this.props.handleClickByCuisine(event)}
          >
            {this.cuisine.map((value) => (
              <option value={value.toLowerCase()} key={value}>
                {value}
              </option>
            ))}
          </select>
          <select
            className="select__diet"
            value={this.props.diet}
            onChange={(event) => this.props.handleClickByDiet(event)}
          >
            {this.diet.map((value) => (
              <option value={value.toLowerCase()} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Dropdown;
