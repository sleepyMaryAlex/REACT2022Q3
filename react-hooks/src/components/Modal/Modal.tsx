import React from 'react';
import './Modal.css';
import closeButton from '../../assets/icons/close-button.svg';
import { IModal } from 'types/types';
import { capitalizeString, setColor } from 'app/common';

function Modal(props: IModal) {
  const { image, name, status, gender, species, type, origin, location, created } = props.card;
  return (
    <div className={`modal modal__${setColor(status)}`}>
      <img
        className="modal__close-button"
        src={closeButton}
        alt="close"
        onClick={() => {
          props.setOpenModal(false);
        }}
      />
      <img src={image} alt="image" className="modal__image" />
      <div className="modal__content">
        <h3>{name}</h3>
        <div className="modal__wrapper">
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
        </div>
        <div className="modal__wrapper">
          <div className="modal__container">
            <p className="modal__caption">First seen in:</p>
            <p>{capitalizeString(origin.name)}</p>
          </div>
          <div className="modal__container">
            <p className="modal__caption">Last known location:</p>
            <p>{capitalizeString(location.name)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
