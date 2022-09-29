import React from 'react';
import { ICard } from 'types/types';
import './Card.css';

class Card extends React.Component<{ card: ICard }> {
  render() {
    return (
      <div className="card">
        <img src={this.props.card.image} alt="food" />
        <p className="card__title">{this.props.card.title.toLocaleUpperCase()}</p>
      </div>
    );
  }
}

export default Card;
