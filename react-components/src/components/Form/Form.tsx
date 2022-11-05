import React, { useEffect } from 'react';
import './Form.scss';
import InputText from 'components/InputText/InputText';
import InputFile from 'components/InputFile/InputFile';
import Select from 'components/Select/Select';
import Checkbox from 'components/Checkbox/Checkbox';
import Switcher from 'components/Switcher/Switcher';
import InputDate from 'components/InputDate/InputDate';
import Message from 'components/Message/Message';
import { speciesValues } from 'app/utils';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import {
  selectCanCheckMistakes,
  selectCanSubmit,
  selectDate,
  selectDisplayMessage,
  selectGender,
  selectImage,
  selectName,
  selectSpecies,
  selectStatus,
  setCanCheckMistakes,
  setCanSubmit,
  setCharacters,
  setDate,
  setDisplayErrorMessage,
  setDisplayMessage,
  setGender,
  setImage,
  setName,
  setSpecies,
  setStatus,
} from 'store/formSlice';

function Form() {
  const name = useAppSelector(selectName);
  const image = useAppSelector(selectImage);
  const status = useAppSelector(selectStatus);
  const species = useAppSelector(selectSpecies);
  const gender = useAppSelector(selectGender);
  const date = useAppSelector(selectDate);
  const canSubmit = useAppSelector(selectCanSubmit);
  const canCheckMistakes = useAppSelector(selectCanCheckMistakes);
  const displayMessage = useAppSelector(selectDisplayMessage);

  const dispatch = useAppDispatch();

  function resetForm() {
    dispatch(setName(''));
    dispatch(setImage({ image: '', fileName: '' }));
    dispatch(setStatus('Status'));
    dispatch(
      setSpecies({ species: [], checkedState: new Array(speciesValues.length).fill(false) })
    );
    dispatch(setGender('Male'));
    dispatch(setDate(''));
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
      dispatch(setDisplayMessage(true));
      dispatch(setCharacters(card));
      resetForm();
      dispatch(setDisplayErrorMessage(false));
      dispatch(setCanCheckMistakes(false));
    } else {
      dispatch(setDisplayErrorMessage(true));
      dispatch(setCanSubmit(false));
      dispatch(setCanCheckMistakes(true));
    }
  }

  useEffect(() => {
    if (name && date && image && status !== 'Status' && species.length !== 0) {
      dispatch(setCanSubmit(true));
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
        dispatch(setCanSubmit(false));
      } else {
        dispatch(setCanSubmit(true));
      }
    }
  }, [name, image, status, species, gender, date]);

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-title">
        <h2>Create a character</h2>
      </div>
      <div className="container">
        <InputText />
        <InputFile />
        <Select />
        <Checkbox />
        <Switcher />
        <InputDate />
        <input
          type="submit"
          value="Create a character"
          disabled={!canSubmit}
          className={`submit-button${canSubmit ? '' : ' disabled'}`}
        />
      </div>
      {displayMessage && <Message />}
    </form>
  );
}

export default Form;
