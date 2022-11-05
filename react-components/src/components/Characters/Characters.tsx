import CharactersCards from 'components/CharactersCards/CharactersCards';
import Form from 'components/Form/Form';
import { useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectDisplayMessage } from 'store/formSlice';
import './Characters.scss';

function Characters() {
  const displayMessage = useAppSelector(selectDisplayMessage);

  return (
    <div className={`characters${displayMessage ? ' characters-overlay' : ''}`}>
      <Form />
      <CharactersCards />
    </div>
  );
}

export default Characters;
