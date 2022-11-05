import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectDisplayErrorMessage, selectName, setName } from 'store/formSlice';
import './InputText.scss';

function InputText() {
  const name = useAppSelector(selectName);
  const displayErrorMessage = useAppSelector(selectDisplayErrorMessage);

  const dispatch = useAppDispatch();

  return (
    <div className="text-field">
      <input
        placeholder="Name"
        className="input"
        type="text"
        spellCheck={false}
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
      />
      <p className="error-message">
        {displayErrorMessage && !name ? 'This field is required' : ''}
      </p>
    </div>
  );
}

export default InputText;
