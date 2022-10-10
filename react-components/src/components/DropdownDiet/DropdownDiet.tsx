import React from 'react';
import { IDropdownDiet } from 'types/types';
import './DropdownDiet.css';

class DropdownDiet extends React.Component<IDropdownDiet> {
  diet: string[];
  constructor(props: IDropdownDiet) {
    super(props);
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
    );
  }
}

export default DropdownDiet;
