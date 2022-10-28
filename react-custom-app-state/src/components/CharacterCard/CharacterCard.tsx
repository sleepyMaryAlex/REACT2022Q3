import { capitalizeString } from 'app/common';
import React from 'react';
import { ICharacterCard } from 'types/types';
import './CharacterCard.css';

function CharacterCard(props: { card: ICharacterCard }) {
  const { name, image, status, species, gender, date } = props.card;

  return (
    <div className="character-card">
      <img src={image} alt="character" />
      <div className="character-card__content">
        <p className="character__name">{capitalizeString(name)}</p>
        <p>
          <span>Status:</span>
          {status.toLowerCase()}
        </p>
        <p>
          <span>Species:</span>
          {species.join(' - ').toLowerCase()}
        </p>
        <p>
          <span>Gender:</span>
          {gender.toLowerCase()}
        </p>
        <p>
          <span>Created:</span>
          {new Date(date).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
}

export default CharacterCard;
