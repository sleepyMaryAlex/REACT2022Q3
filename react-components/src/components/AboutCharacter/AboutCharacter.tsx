import React, { useEffect, useState } from 'react';
import './AboutCharacter.css';
import { capitalizeString, setColor } from 'app/utils';
import { useNavigate } from 'react-router-dom';
import returnImg from '../../assets/icons/prev-arrow.svg';
import { selectIndex, selectResults, setIndex } from 'store/mainSlice';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';

function AboutCharacter() {
  const index = useAppSelector(selectIndex);
  const results = useAppSelector(selectResults);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [counter, setCounter] = useState(3);

  useEffect(() => {
    if (index === null) {
      counter > 0 ? setTimeout(() => setCounter(counter - 1), 1000) : navigate('/');
    }
  }, [counter]);

  useEffect(() => {
    return () => {
      dispatch(setIndex(null));
    };
  }, []);

  if (index !== null) {
    const { image, name, status, gender, species, type, origin, location, created } =
      results[index as number];
    return (
      <div className={`about-character about-character__${setColor(status)}`}>
        <div className="about-character__wrapper">
          <img src={image} alt="image" className="about-character__image" />
          <div className="about-character__content">
            <h3>{name}</h3>
            <p>
              <span>Gender: </span>
              {capitalizeString(gender)}
            </p>
            <p>
              <span>Status: </span>
              {capitalizeString(status)}
            </p>
            <p>
              <span>Species: </span>
              {capitalizeString(species)}
            </p>
            <p>
              <span>Type: </span>
              {type ? capitalizeString(type) : 'Unknown'}
            </p>
            <p>
              <span>Created: </span>
              {created
                ? new Date(created).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                : 'Unknown'}
            </p>
            <div className="about-character__container">
              <p className="about-character__caption">First seen in:</p>
              <p>{capitalizeString(origin.name)}</p>
            </div>
            <div className="about-character__container">
              <p className="about-character__caption">Last known location:</p>
              <p>{capitalizeString(location.name)}</p>
            </div>
          </div>
        </div>
        <div className="not-found__return-button" onClick={() => navigate('/')}>
          <img src={returnImg} alt="image" />
          <p>Return to main page</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="about-character about-character__red">
        <p className="about-character__message">
          Sorry, you have not selected a character yet. Click on the card on the main page to
          choose.
        </p>
        <p className="about-character__counter">{counter}</p>
      </div>
    );
  }
}

export default AboutCharacter;
