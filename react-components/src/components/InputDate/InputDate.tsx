import React from 'react';
import './InputDate.css';

class InputDate extends React.Component<{ handleDateChange: (date: string) => void }> {
  dateRef: React.RefObject<HTMLInputElement>;
  constructor(props: { handleDateChange: (date: string) => void }) {
    super(props);
    this.dateRef = React.createRef();
  }

  handleChange() {
    const date = this.dateRef.current?.value as string;
    this.props.handleDateChange(date);
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
      </div>
    );
  }
}

export default InputDate;
