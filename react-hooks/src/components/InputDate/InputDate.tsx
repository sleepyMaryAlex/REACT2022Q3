import React from 'react';
import { IInputDate } from 'types/types';
import './InputDate.css';

function InputDate(props: IInputDate) {
  const { setDate, date, displayErrorMessage } = props;

  return (
    <div className="input-date__container">
      <label htmlFor="date" className="input-date__label">
        Date of creation
      </label>
      <input
        type="date"
        id="date"
        value={date}
        className="input-date"
        onChange={(e) => setDate(e.target.value)}
      />
      <p className="form__message">{displayErrorMessage && !date ? 'Please, select date' : ''}</p>
    </div>
  );
}

export default InputDate;
