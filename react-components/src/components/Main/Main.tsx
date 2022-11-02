import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { IMain } from 'types/types';
import './Main.css';

class Main extends React.Component<IMain> {
  componentWillUnmount() {
    localStorage.setItem('value', this.props.value);
  }

  render() {
    return (
      <div className="main">
        <SearchBar value={this.props.value} handleChange={this.props.handleChange} />
        <Results
          cards={this.props.cards}
          numShow={this.props.numShow}
          handleClickByCuisine={this.props.handleClickByCuisine}
          handleClickByDiet={this.props.handleClickByDiet}
          cuisine={this.props.cuisine}
          diet={this.props.diet}
        />
      </div>
    );
  }
}

export default Main;
