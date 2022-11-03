import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectDate, selectDisplayErrorMessage, setDate } from 'store/formSlice';
import './InputDate.css';

function InputDate() {
  const date = useAppSelector(selectDate);
  const displayErrorMessage = useAppSelector(selectDisplayErrorMessage);

  const dispatch = useAppDispatch();

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
        onChange={(e) => dispatch(setDate(e.target.value))}
      />
      <p className="form__message">{displayErrorMessage && !date ? 'Please, select date' : ''}</p>
    </div>
  );
}

export default InputDate;
