import React from 'react';
import { IDropdown } from 'types/types';
import './Dropdown.css';

class Dropdown extends React.Component<IDropdown, { cuisine: string[]; diet: string[] }> {
  constructor(props: IDropdown) {
    super(props);
    this.state = {
      cuisine: [
        'AFRICAN',
        'AMERICAN',
        'BRITISH',
        'CHINESE',
        'GERMAN',
        'ITALIAN',
        'JAPANESE',
        'NORDIC',
      ],
      diet: [
        'GLUTEN FREE',
        'KETOGENIC',
        'VEGETARIAN',
        'PRIMAL',
        'VEGAN',
        'PALEO',
        'LOW FODMAP',
        'WHOLE30',
      ],
    };
  }
  render() {
    return (
      <div className="cards__results">
        <p className="results__title">{this.props.cards.length} RESULTS</p>
        <select
          className="select__coisine"
          value={this.props.cuisine}
          onChange={(event) => this.props.handleClickByCuisine(event)}
        >
          <option value="cuisine">ALL CUISINES</option>
          {this.state.cuisine.map((value) => (
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
          <option value="diet">ALL DIETS</option>
          {this.state.diet.map((value) => (
            <option value={value.toLowerCase()} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Dropdown;
