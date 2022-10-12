import React from 'react';
import { IResult } from 'types/types';
import './Card.css';

class Card extends React.Component<{ card: IResult }> {
  capitalizeString(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  setColor(status: string) {
    switch (this.capitalizeString(status)) {
      case 'Alive':
        return 'green';
      case 'Dead':
        return 'red';
      default:
        return 'purple';
    }
  }

  render() {
    const { name, image, status, species, location, origin } = this.props.card;
    return (
      <div className="card">
        <img src={image} alt="image" />
        <div className="card__content">
          <p className="card__name">{name}</p>
          <div className="card__wrapper">
            <div className={`card__circle circle__${this.setColor(status)}`}></div>
            <span className="card__status">{this.capitalizeString(status)}</span>
            <span className="card__dash">-</span>
            <span className="card__species">{this.capitalizeString(species)}</span>
          </div>
          <div className="card__container">
            <p className="card__caption">First seen in:</p>
            <p>{this.capitalizeString(origin.name)}</p>
          </div>
          <div className="card__container">
            <p className="card__caption">Last known location:</p>
            <p>{this.capitalizeString(location.name)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
