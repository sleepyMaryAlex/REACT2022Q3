import React from 'react';
import { IInputText } from 'types/types';
import './InputText.css';

function InputText(props: IInputText) {
  const { name, dispatch, displayErrorMessage } = props;

  return (
    <div className="form__text-field">
      <input
        placeholder="Name"
        className="form__input-text"
        type="text"
        autoFocus
        spellCheck={false}
        value={name}
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
      />
      <p className="form__message">
        {displayErrorMessage && !name ? 'This field is required' : ''}
      </p>
    </div>
  );
}

export default InputText;
