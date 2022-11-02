import Card from 'components/Card/Card';
import React from 'react';
import { ICards, IResult } from 'types/types';
import './Cards.css';

class Cards extends React.Component<ICards> {
  render() {
    const { setOpenModal, setIndex } = this.props;
    return (
      <div className="cards">
        {this.props.results.map((card: IResult, index) => (
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
}

export default Cards;
