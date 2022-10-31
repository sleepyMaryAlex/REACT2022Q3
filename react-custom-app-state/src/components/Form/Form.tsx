import React, { useEffect, useReducer } from 'react';
import { IForm, IFormState } from 'types/types';
import './Form.css';
import InputText from 'components/InputText/InputText';
import InputFile from 'components/InputFile/InputFile';
import Select from 'components/Select/Select';
import Checkbox from 'components/Checkbox/Checkbox';
import Switcher from 'components/Switcher/Switcher';
import InputDate from 'components/InputDate/InputDate';
import Message from 'components/Message/Message';
import { speciesValues } from 'app/common';
import formReducer from 'app/formReducer';

function Form(props: IForm) {
  let data;
  if (localStorage.getItem('formData')) {
    data = JSON.parse(localStorage.getItem('formData') as string);
  }
  const initialState: IFormState = {
    name: data?.name || '',
    image: data?.image || '',
    fileName: data?.fileName || '',
    status: data?.status || 'Status',
    species: data?.species || [],
    checkedState: data?.checkedState || new Array(speciesValues.length).fill(false),
    gender: data?.gender || 'Male',
    date: data?.date || '',
    canSubmit: data?.canSubmit || false,
    displayErrorMessage: data?.displayErrorMessage || false,
    canCheckMistakes: data?.canCheckMistakes || false,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);
  const {
    name,
    image,
    status,
    species,
    checkedState,
    gender,
    date,
    canCheckMistakes,
    displayErrorMessage,
    canSubmit,
    fileName,
  } = state;

  function resetForm() {
    dispatch({ type: 'SET_NAME', payload: '' });
    dispatch({ type: 'SET_IMAGE', payload: '' });
    dispatch({ type: 'SET_FILE_NAME', payload: '' });
    dispatch({ type: 'SET_STATUS', payload: 'Status' });
    dispatch({ type: 'SET_SPECIES', payload: [] });
    dispatch({ type: 'SET_CHECKED_STATE', payload: new Array(speciesValues.length).fill(false) });
    dispatch({ type: 'SET_GENDER', payload: 'Male' });
    dispatch({ type: 'SET_DATE', payload: '' });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name && date && image && status !== 'Status' && species.length !== 0) {
      const card = {
        name,
        image,
        status,
        gender,
        species,
        date,
      };
      props.setDisplayMessage(true);
      props.addCharacter(card);
      resetForm();
      dispatch({ type: 'SET_DISPLAY_ERROR_MESSAGE', payload: false });
      dispatch({ type: 'SET_CAN_CHECK_MISTAKES', payload: false });
    } else {
      dispatch({ type: 'SET_DISPLAY_ERROR_MESSAGE', payload: true });
      dispatch({ type: 'SET_CAN_SUBMIT', payload: false });
      dispatch({ type: 'SET_CAN_CHECK_MISTAKES', payload: true });
    }
  }

  useEffect(() => {
    const formData = {
      name,
      image,
      fileName,
      status,
      species,
      gender,
      date,
      checkedState,
      canCheckMistakes,
      canSubmit,
      displayErrorMessage,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    if (name && date && image && status !== 'Status' && species.length !== 0) {
      dispatch({ type: 'SET_CAN_SUBMIT', payload: true });
    }
    if (!canCheckMistakes) {
      if (
        !name &&
        !date &&
        !image &&
        status === 'Status' &&
        species.length === 0 &&
        gender === 'Male'
      ) {
        dispatch({ type: 'SET_CAN_SUBMIT', payload: false });
      } else {
        dispatch({ type: 'SET_CAN_SUBMIT', payload: true });
      }
    }
  }, [name, image, status, species, gender, date]);

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__title">
        <h2>Create a character</h2>
      </div>
      <div className="form__container">
        <InputText name={name} dispatch={dispatch} displayErrorMessage={displayErrorMessage} />
        <InputFile
          image={image}
          fileName={fileName}
          dispatch={dispatch}
          displayErrorMessage={displayErrorMessage}
        />
        <Select dispatch={dispatch} status={status} displayErrorMessage={displayErrorMessage} />
        <Checkbox
          species={species}
          dispatch={dispatch}
          displayErrorMessage={displayErrorMessage}
          checkedState={checkedState}
        />
        <Switcher gender={gender} dispatch={dispatch} />
        <InputDate dispatch={dispatch} date={date} displayErrorMessage={displayErrorMessage} />
        <input
          type="submit"
          value="Create a character"
          disabled={!canSubmit}
          className={`submit-button${canSubmit ? '' : ' submit-button_disabled'}`}
        />
      </div>
      {props.displayMessage ? <Message setDisplayMessage={props.setDisplayMessage} /> : ''}
    </form>
  );
}

export default Form;
