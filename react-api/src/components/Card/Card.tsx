import Common from 'app/common';
import React from 'react';
import { ICard } from 'types/types';
import './Card.css';

class Card extends React.Component<ICard> {
  handleClick(index: number) {
    this.props.setIndex(index);
    this.props.setOpenModal(true);
  }

  render() {
    const { name, image, status, species, location, origin } = this.props.card;
    return (
      <div>
        <div className="card" onClick={() => this.handleClick(this.props.index)}>
          <img src={image} alt="image" />
          <div className="card__content">
            <h3 className="card__name">{name.length > 20 ? `${name.slice(0, 20)}...` : name}</h3>
            <div className="card__info">
              <div className={`card__circle circle__${Common.setColor(status)}`}></div>
              <span>{Common.capitalizeString(status)}</span>
              <span className="card__dash">-</span>
              <span>{Common.capitalizeString(species)}</span>
            </div>
            <div className="card__container">
              <p className="card__caption">First seen in:</p>
              <p>{Common.capitalizeString(origin.name)}</p>
            </div>
            <div className="card__container">
              <p className="card__caption">Last known location:</p>
              <p>{Common.capitalizeString(location.name)}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
