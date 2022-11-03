import CharacterCard from 'components/CharacterCard/CharacterCard';
import { useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectCharacters } from 'store/formSlice';
import './CharactersCards.css';

function CharactersCards() {
  const characters = useAppSelector(selectCharacters);

  return (
    <div className="characters-wrapper">
      <div className="characters-cards__title">
        <h2>Your characters</h2>
      </div>
      <div className="characters__cards">
        {characters.length ? (
          characters.map((value) => <CharacterCard card={value} key={value.name + Math.random()} />)
        ) : (
          <p className="characters__message">You have not created characters yet</p>
        )}
      </div>
    </div>
  );
}

export default CharactersCards;
