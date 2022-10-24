import React from 'react';
import { ISelect } from 'types/types';
import './Select.css';

function Select(props: ISelect) {
  const statuses = ['Alive', 'Dead', 'Unknown'];
  const { setStatus, displayErrorMessage, status } = props;

  return (
    <div className="form__dropdown-field">
      <select className="form__dropdown" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option disabled>Status</option>
        {statuses.map((value) => (
          <option key={value}>{value}</option>
        ))}
      </select>
      <p className="form__message">
        {displayErrorMessage && status === 'Status' ? 'Please, select status' : ''}
      </p>
    </div>
  );
}

export default Select;
