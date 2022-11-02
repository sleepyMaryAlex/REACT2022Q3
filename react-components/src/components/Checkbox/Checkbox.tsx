import React from 'react';
import { ICheckbox } from 'types/types';
import './Checkbox.css';

class Checkbox extends React.Component<ICheckbox, { checkedState: boolean[] }> {
  diet: string[];
  checkboxRef: React.RefObject<HTMLInputElement>;
  constructor(props: ICheckbox) {
    super(props);
    this.diet = [
      'GLUTEN FREE',
      'KETOGENIC',
      'VEGETARIAN',
      'PRIMAL',
      'VEGAN',
      'PALEO',
      'LOW FODMAP',
      'WHOLE30',
      'OTHER',
    ];
    this.checkboxRef = React.createRef();
    this.state = {
      checkedState: new Array(this.diet.length).fill(false),
    };
  }

  handleChange(position: number) {
    const updatedCheckedState = this.state.checkedState.map((value, index) =>
      index === position ? !value : value
    );
    this.setState({ checkedState: updatedCheckedState });
    const diet: string[] = updatedCheckedState.reduce((previous, current, index) => {
      if (current) {
        return previous.concat(this.diet[index]);
      }
      return previous;
    }, [] as string[]);
    this.props.handleDietChange(diet);
  }

  componentDidUpdate(prevProps: ICheckbox) {
    if (prevProps.canClearForm !== this.props.canClearForm) {
      this.setState({ checkedState: new Array(this.diet.length).fill(false) });
    }
  }

  render() {
    return (
      <div className="checkbox__container">
        <p className="checkbox__title">DIETS</p>
        {this.diet.map((value, index) => {
          return (
            <div className="checkbox__wrapper" key={value}>
              <input
                type="checkbox"
                className="checkbox"
                onClick={() => this.handleChange(index)}
                id={value}
                name="diet"
              />
              <label className="checkbox__label" htmlFor={value}>
                {value}
              </label>
              <span className="checkbox__span"></span>
            </div>
          );
        })}
        <p className="form__message">{this.props.showDietMessage ? 'Please, select diet' : ''}</p>
      </div>
    );
  }
}

export default Checkbox;
