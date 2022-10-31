import { capitalizeString, setColor } from 'app/common';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ICard } from 'types/types';
import './Card.css';

function Card(props: ICard) {
  const navigate = useNavigate();

  function handleClick(index: number) {
    props.dispatch({ type: 'SET_INDEX', payload: index });
    navigate('/details');
  }

  const { name, image, status, species, location, origin } = props.card;
  return (
    <div>
      <div className="card" onClick={() => handleClick(props.index)}>
        <img src={image} alt="image" />
        <div className="card__content">
          <h3 className="card__name">{name.length > 18 ? `${name.slice(0, 18)}...` : name}</h3>
          <div className="card__info">
            <div className={`card__circle circle__${setColor(status)}`}></div>
            <span>{capitalizeString(status)}</span>
            <span className="card__dash">-</span>
            <span>{capitalizeString(species)}</span>
          </div>
          <div className="card__container">
            <p className="card__caption">First seen in:</p>
            <p>{capitalizeString(origin.name)}</p>
          </div>
          <div className="card__container">
            <p className="card__caption">Last known location:</p>
            <p>{capitalizeString(location.name)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
