import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectDate, selectDisplayErrorMessage, setDate } from 'store/formSlice';
import './InputDate.scss';

function InputDate() {
  const date = useAppSelector(selectDate);
  const displayErrorMessage = useAppSelector(selectDisplayErrorMessage);

  const dispatch = useAppDispatch();

  return (
    <div className="input-date">
      <label htmlFor="date" className="label">
        Date of creation
      </label>
      <input
        type="date"
        id="date"
        value={date}
        className="input"
        onChange={(e) => dispatch(setDate(e.target.value))}
      />
      <p className="error-message">{displayErrorMessage && !date ? 'Please, select date' : ''}</p>
    </div>
  );
}

export default InputDate;
