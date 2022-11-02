import React from 'react';
import { ISwitcher } from 'types/types';
import './Switcher.css';

function Switcher(props: ISwitcher) {
  const { gender, dispatch } = props;
  return (
    <div className="switcher__container">
      <input
        type="checkbox"
        className="switcher"
        id="switcher"
        checked={gender === 'Male' ? false : true}
        onChange={() =>
          dispatch({ type: 'SET_GENDER', payload: gender === 'Male' ? 'Female' : 'Male' })
        }
      />
      <label className="switcher__label" htmlFor="switcher">
        {gender}
      </label>
    </div>
  );
}

export default Switcher;
