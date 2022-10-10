import React from 'react';
import './Checkbox.css';

class Checkbox extends React.Component<
  {
    handleDietChange: (diet: string[]) => void;
    showDietMessage: boolean;
  },
  { checkedState: boolean[] }
> {
  diet: string[];
  constructor(props: { handleDietChange: (diet: string[]) => void; showDietMessage: boolean }) {
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
    ];
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

  clearCheckbox() {
    // this.checkboxRef.map((ref) => ((ref.current as HTMLInputElement).checked = false));
    // for (const ch of this.checkboxRef) {
    //   console.log(ch.current);
    // }
    this.setState({ checkedState: new Array(this.diet.length).fill(false) });
    this.props.handleDietChange([]);
  }

  componentDidUpdate(prevProps: ICheckbox) {
    if (prevProps.canClearForm !== this.props.canClearForm) {
      this.clearCheckbox();
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
                onChange={() => this.handleChange(index)}
                id={value}
                name="diet"
                value={value}
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
