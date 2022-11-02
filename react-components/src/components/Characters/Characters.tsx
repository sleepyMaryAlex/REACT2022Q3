import CharactersCards from 'components/CharactersCards/CharactersCards';
import Form from 'components/Form/Form';
import React, { useState } from 'react';
import { ICharacterCard } from 'types/types';
import './Characters.css';

function Characters() {
  const [displayMessage, setDisplayMessage] = useState<boolean>(false);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem('characters') as string) || []
  );

  function addCharacter(card: ICharacterCard) {
    const characters = [...cards, card];
    setCards(characters);
    localStorage.setItem('characters', JSON.stringify(characters));
  }

  return (
    <div className={`characters${displayMessage ? ' characters__overlay' : ''}`}>
      <Form
        addCharacter={addCharacter}
        displayMessage={displayMessage}
        setDisplayMessage={setDisplayMessage}
      />
      <CharactersCards cards={cards} />
    </div>
  );
}

export default Characters;
