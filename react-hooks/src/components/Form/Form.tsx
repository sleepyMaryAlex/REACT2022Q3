import React, { useEffect, useRef, useState } from 'react';
import { IForm } from 'types/types';
import './Form.css';
import InputText from 'components/InputText/InputText';
import InputFile from 'components/InputFile/InputFile';
import Select from 'components/Select/Select';
import Checkbox from 'components/Checkbox/Checkbox';
import Switcher from 'components/Switcher/Switcher';
import InputDate from 'components/InputDate/InputDate';
import Message from 'components/Message/Message';
import { speciesValues } from 'app/common';

function Form(props: IForm) {
  const [name, setName] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [status, setStatus] = useState<string>('Status');
  const [species, setSpecies] = useState<string[]>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(speciesValues.length).fill(false)
  );
  const [gender, setGender] = useState<string>('Male');
  const [date, setDate] = useState<string>('');
  const [canSubmit, setCanSubmit] = useState<boolean>(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState<boolean>(false);
  const [canCheckMistakes, setCanCheckMistakes] = useState<boolean>(false);

  function resetForm() {
    setName('');
    setImage('');
    setFileName('');
    setStatus('Status');
    setCheckedState(new Array(speciesValues.length).fill(false));
    setSpecies([]);
    setGender('Male');
    setDate('');
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
      setCanCheckMistakes(false);
      setCanSubmit(false);
      setDisplayErrorMessage(false);
    } else {
      setDisplayErrorMessage(true);
      setCanCheckMistakes(true);
      setCanSubmit(false);
    }
  }

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (name && date && image && status !== 'Status' && species.length !== 0) {
      setCanCheckMistakes(false);
      setCanSubmit(true);
    }
    if (!canCheckMistakes) {
      setCanSubmit(true);
    }
  }, [name, image, status, species, gender, date]);

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__title">
        <h2>Create a character</h2>
      </div>
      <div className="form__container">
        <InputText name={name} setName={setName} displayErrorMessage={displayErrorMessage} />
        <InputFile
          image={image}
          fileName={fileName}
          setImage={setImage}
          setFileName={setFileName}
          displayErrorMessage={displayErrorMessage}
        />
        <Select setStatus={setStatus} status={status} displayErrorMessage={displayErrorMessage} />
        <Checkbox
          species={species}
          setSpecies={setSpecies}
          displayErrorMessage={displayErrorMessage}
          checkedState={checkedState}
          setCheckedState={setCheckedState}
        />
        <Switcher gender={gender} setGender={setGender} />
        <InputDate setDate={setDate} date={date} displayErrorMessage={displayErrorMessage} />
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
