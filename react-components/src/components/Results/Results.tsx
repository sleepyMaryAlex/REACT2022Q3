import Cards from 'components/Cards/Cards';
import Dropdown from 'components/Dropdown/Dropdown';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

class Results extends React.Component<IResults> {
  render() {
    return (
      <div className="results">
        <div className="results__container">
          <Dropdown
            cards={this.props.cards}
            handleClickByCuisine={this.props.handleClickByCuisine}
            handleClickByDiet={this.props.handleClickByDiet}
            cuisine={this.props.cuisine}
            diet={this.props.diet}
          />
        </div>
        <Cards cards={this.props.cards} numShow={this.props.numShow} />
      </div>
    );
  }
}

export default Results;
