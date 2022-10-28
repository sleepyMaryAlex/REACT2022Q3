import CharacterCard from 'components/CharacterCard/CharacterCard';
import React from 'react';
import { ICharacterCard } from 'types/types';
import './CharactersCards.css';

function CharactersCards(props: { cards: ICharacterCard[] }) {
  return (
    <div className="characters-wrapper">
      <div className="characters-cards__title">
        <h2>Your characters</h2>
      </div>
      <div className="characters__cards">
        {props.cards.length ? (
          props.cards.map((value) => (
            <CharacterCard card={value} key={value.name + Math.random()} />
          ))
        ) : (
          <p className="characters__message">You have not created characters yet</p>
        )}
      </div>
    </div>
  );
}

export default CharactersCards;
