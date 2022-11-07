import Card from 'components/Card/Card';
import { useAppSelector } from 'hooks/hooks';
import React from 'react';
import { selectResults } from 'store/mainSlice';
import { IResult } from 'types/types';
import './Cards.scss';

function Cards() {
  const results = useAppSelector(selectResults);

  return (
    <div className="cards">
      {results.map((card: IResult, index) => (
        <Card card={card} key={card.id} index={index} />
      ))}
    </div>
  );
}

export default Cards;
