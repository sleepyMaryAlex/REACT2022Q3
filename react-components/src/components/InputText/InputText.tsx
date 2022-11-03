import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectDisplayErrorMessage, selectName, setName } from 'store/formSlice';
import './InputText.css';

function InputText() {
  const name = useAppSelector(selectName);
  const displayErrorMessage = useAppSelector(selectDisplayErrorMessage);

  const dispatch = useAppDispatch();

  return (
    <div className="form__text-field">
      <input
        placeholder="Name"
        className="form__input-text"
        type="text"
        autoFocus
        spellCheck={false}
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <p className="form__message">
        {displayErrorMessage && !name ? 'This field is required' : ''}
      </p>
    </div>
  );
}

export default InputText;
