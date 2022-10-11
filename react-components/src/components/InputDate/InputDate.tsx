import React from 'react';
import { IInputDate } from 'types/types';
import './InputDate.css';

class InputDate extends React.Component<IInputDate> {
  dateRef: React.RefObject<HTMLInputElement>;
  constructor(props: IInputDate) {
    super(props);
    this.dateRef = React.createRef();
  }

  handleChange() {
    const date = this.dateRef.current?.value as string;
    this.props.handleDateChange(date);
  }

  componentDidUpdate(prevProps: IInputDate) {
    if (prevProps.canClearForm !== this.props.canClearForm) {
      (this.dateRef.current as HTMLInputElement).value = '';
    }
  }

  render() {
    return (
      <div className="input-date__container">
        <label htmlFor="date" className="input-date__label">
          DATE OF CREATION
        </label>
        <input
          type="date"
          id="date"
          ref={this.dateRef}
          className="input-date"
          onChange={this.handleChange.bind(this)}
        />
        <p className="form__message">{this.props.showDateMessage ? 'Please, select date' : ''}</p>
      </div>
    );
  }
}

export default InputDate;
