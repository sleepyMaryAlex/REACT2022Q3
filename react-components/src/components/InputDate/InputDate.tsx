import React from 'react';
import './InputDate.css';

class InputDate extends React.Component<{
  handleDateChange: (date: string) => void;
  showDateMessage: boolean;
}> {
  dateRef: React.RefObject<HTMLInputElement>;
  constructor(props: { handleDateChange: (date: string) => void; showDateMessage: boolean }) {
    super(props);
    this.dateRef = React.createRef();
  }

  handleChange() {
    const date = this.dateRef.current?.value as string;
    this.props.handleDateChange(date);
  }

  clearInputDate() {
    (this.dateRef.current as HTMLInputElement).value = '';
    this.props.handleDateChange('');
  }

  componentDidUpdate(prevProps: IInputDate) {
    if (prevProps.canClearForm !== this.props.canClearForm) {
      this.clearInputDate();
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
