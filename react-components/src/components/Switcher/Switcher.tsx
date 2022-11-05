import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectGender, setGender } from 'store/formSlice';
import './Switcher.scss';

function Switcher() {
  const gender = useAppSelector(selectGender);

  const dispatch = useAppDispatch();

  return (
    <div className="switcher">
      <input
        type="checkbox"
        className="input"
        id="switcher"
        checked={gender === 'Male' ? false : true}
        onChange={() => dispatch(setGender(gender === 'Male' ? 'Female' : 'Male'))}
      />
      <label className="label" htmlFor="switcher">
        {gender}
      </label>
    </div>
  );
}

export default Switcher;
