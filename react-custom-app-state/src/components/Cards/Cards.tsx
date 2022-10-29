import Card from 'components/Card/Card';
import React from 'react';
import { ICards, IResult } from 'types/types';
import './Cards.css';

function Cards(props: ICards) {
  const { dispatch, results } = props;
  return (
    <div className="cards">
      {results.map((card: IResult, index) => (
        <Card dispatch={dispatch} card={card} key={card.id.toString()} index={index} />
      ))}
    </div>
  );
}

export default Cards;
