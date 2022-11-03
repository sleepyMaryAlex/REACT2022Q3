import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectGender, setGender } from 'store/formSlice';
import './Switcher.css';

function Switcher() {
  const gender = useAppSelector(selectGender);

  const dispatch = useAppDispatch();

  return (
    <div className="switcher__container">
      <input
        type="checkbox"
        className="switcher"
        id="switcher"
        checked={gender === 'Male' ? false : true}
        onChange={() => dispatch(setGender(gender === 'Male' ? 'Female' : 'Male'))}
      />
      <label className="switcher__label" htmlFor="switcher">
        {gender}
      </label>
    </div>
  );
}

export default Switcher;
