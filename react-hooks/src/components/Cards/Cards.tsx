import Card from 'components/Card/Card';
import React from 'react';
import { ICards, IResult } from 'types/types';
import './Cards.css';

function Cards(props: ICards) {
  const { setOpenModal, setIndex } = props;
  return (
    <div className="cards">
      {props.results.map((card: IResult, index) => (
        <Card
          setOpenModal={setOpenModal}
          card={card}
          key={card.id.toString()}
          setIndex={setIndex}
          index={index}
        />
      ))}
    </div>
  );
}

export default Cards;
