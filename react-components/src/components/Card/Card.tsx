import { capitalizeString, setColor } from 'app/utils';
import { useAppDispatch } from 'hooks/hooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { setIndex } from 'store/mainSlice';
import { ICard } from 'types/types';
import './Card.scss';

function Card(props: ICard) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  function handleClick(index: number) {
    dispatch(setIndex(index));
    navigate('/details');
  }

  const { name, image, status, species, location, origin } = props.card;

  return (
    <div className="card" onClick={() => handleClick(props.index)}>
      <img src={image} alt="image" />
      <div className="content">
        <h3 className="name">{name}</h3>
        <div className="info">
          <div className={`circle circle-${setColor(status)}`}></div>
          <span>{capitalizeString(status)}</span>
          <span className="dash">-</span>
          <span>{capitalizeString(species)}</span>
        </div>
        <div className="container">
          <p className="caption">First seen in:</p>
          <p>{capitalizeString(origin.name)}</p>
        </div>
        <div className="container">
          <p className="caption">Last known location:</p>
          <p>{capitalizeString(location.name)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
