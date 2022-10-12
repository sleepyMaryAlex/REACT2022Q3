import Card from 'components/Card/Card';
import React from 'react';
import { ICards, IResult } from 'types/types';
import './Cards.css';

class Cards extends React.Component<ICards> {
  render() {
    return (
      <div className="cards">
        {this.props.count ? (
          this.props.results.map((card: IResult) => <Card card={card} key={card.id.toString()} />)
        ) : (
          <p className="result__message">SORRY, NOTHING FOUND</p>
        )}
      </div>
    );
  }
}

export default Cards;
