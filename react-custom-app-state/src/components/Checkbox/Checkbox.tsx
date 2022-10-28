import { speciesValues } from 'app/common';
import React from 'react';
import { ICheckbox } from 'types/types';
import './Checkbox.css';

function Checkbox(props: ICheckbox) {
  const { species, setSpecies, displayErrorMessage, checkedState, setCheckedState } = props;

  function handleChange(position: number) {
    const updatedCheckedState = checkedState.map((value, index) =>
      index === position ? !value : value
    );
    setCheckedState(updatedCheckedState);
    const selectedSpecies: string[] = updatedCheckedState.reduce((previous, current, index) => {
      if (current) {
        return previous.concat(speciesValues[index]);
      }
      return previous;
    }, [] as string[]);
    setSpecies(selectedSpecies);
  }

  return (
    <div className="checkbox__container">
      <p className="checkbox__title">Species</p>
      {speciesValues.map((value, index) => {
        return (
          <div className="checkbox__wrapper" key={value}>
            <input
              type="checkbox"
              className="checkbox"
              id={value}
              onChange={() => handleChange(index)}
              checked={species.length === 0 ? false : checkedState[index]}
            />
            <label className="checkbox__label" htmlFor={value}>
              {value}
            </label>
            <span className="checkbox__span"></span>
          </div>
        );
      })}
      <p className="form__message">
        {displayErrorMessage && species.length === 0 ? 'Please, select species' : ''}
      </p>
    </div>
  );
}

export default Checkbox;
