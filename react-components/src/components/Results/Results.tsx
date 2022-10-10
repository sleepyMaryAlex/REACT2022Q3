import Cards from 'components/Cards/Cards';
import DropdownCuisine from 'components/DropdownCuisine/DropdownCuisine';
import DropdownDiet from 'components/DropdownDiet/DropdownDiet';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

class Results extends React.Component<IResults> {
  constructor(props: IResults) {
    super(props);
  }

  render() {
    return (
      <div className="results">
        <div className="results__container">
          <div className="cards__results">
            <p className="results__title">{this.props.cards.length} RESULTS</p>
            <div className="selects">
              <DropdownCuisine
                cards={this.props.cards}
                handleClickByCuisine={this.props.handleClickByCuisine}
                cuisine={this.props.cuisine}
              />
              <DropdownDiet
                cards={this.props.cards}
                handleClickByDiet={this.props.handleClickByDiet}
                diet={this.props.diet}
              />
            </div>
          </div>
        </div>
        <Cards cards={this.props.cards} numShow={this.props.numShow} />
      </div>
    );
  }
}

export default Results;
