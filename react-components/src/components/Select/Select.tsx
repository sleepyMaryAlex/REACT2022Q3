import { statuses } from 'app/utils';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectDisplayErrorMessage, selectStatus, setStatus } from 'store/formSlice';
import './Select.scss';

function Select() {
  const status = useAppSelector(selectStatus);
  const displayErrorMessage = useAppSelector(selectDisplayErrorMessage);

  const dispatch = useAppDispatch();

  return (
    <div className="dropdown-field">
      <select
        className="dropdown"
        value={status}
        onChange={(e) => dispatch(setStatus(e.target.value))}
      >
        <option disabled>Status</option>
        {statuses.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <p className="error-message">
        {displayErrorMessage && status === 'Status' ? 'Please, select status' : ''}
      </p>
    </div>
  );
}

export default Select;
