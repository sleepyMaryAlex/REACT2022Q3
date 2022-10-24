import React from 'react';
import { ISwitcher } from 'types/types';
import './Switcher.css';

function Switcher(props: ISwitcher) {
  return (
    <div className="switcher__container">
      <input
        type="checkbox"
        className="switcher"
        id="switcher"
        checked={props.gender === 'Male' ? false : true}
        onChange={() => props.setGender(props.gender === 'Male' ? 'Female' : 'Male')}
      />
      <label className="switcher__label" htmlFor="switcher">
        {props.gender}
      </label>
    </div>
  );
}

export default Switcher;
