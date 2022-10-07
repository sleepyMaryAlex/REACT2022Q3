import React from 'react';
import './SelectCuisine.css';

class SelectCuisine extends React.Component<{ handleCuisineChange: (cuisine: string) => void }> {
  selectRef: React.RefObject<HTMLSelectElement>;
  cuisine: string[];
  constructor(props: { handleCuisineChange: (cuisine: string) => void }) {
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
    ];
  }

  handleChange() {
    const cuisine = this.selectRef.current?.value as string;
    this.props.handleCuisineChange(cuisine);
  }

  render() {
    return (
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
    );
  }
}

export default SelectCuisine;
