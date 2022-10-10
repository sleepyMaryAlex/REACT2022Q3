import React from 'react';
import { ISelectCuisine } from 'types/types';
import './SelectCuisine.css';

class SelectCuisine extends React.Component<ISelectCuisine> {
  selectRef: React.RefObject<HTMLSelectElement>;
  cuisine: string[];
  constructor(props: ISelectCuisine) {
    super(props);
    this.selectRef = React.createRef();
    this.cuisine = [
      'AFRICAN',
      'AMERICAN',
      'BRITISH',
      'CHINESE',
      'GERMAN',
      'ITALIAN',
      'JAPANESE',
      'NORDIC',
      'OTHER',
    ];
  }

  handleChange() {
    const cuisine = this.selectRef.current?.value as string;
    this.props.handleCuisineChange(cuisine);
  }

  render() {
    return (
      <div className="form__dropdown-field">
        <select
          className="form__dropdown"
          ref={this.selectRef}
          defaultValue="CUISINE"
          onChange={this.handleChange.bind(this)}
        >
          <option disabled>CUISINE</option>
          {this.cuisine.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <p className="form__message">
          {this.props.showCuisineMessage ? 'Please, select cuisine' : ''}
        </p>
      </div>
    );
  }
}

export default SelectCuisine;
