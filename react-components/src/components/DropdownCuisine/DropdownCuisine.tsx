import React from 'react';
import { IDropdownCuisine } from 'types/types';
import './DropdownCuisine.css';

class DropdownCuisine extends React.Component<IDropdownCuisine> {
  cuisine: string[];
  constructor(props: IDropdownCuisine) {
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
  }
  render() {
    return (
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
    );
  }
}

export default DropdownCuisine;
