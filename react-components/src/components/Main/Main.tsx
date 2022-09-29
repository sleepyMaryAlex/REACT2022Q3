import Cards from 'components/Cards/Cards';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { IMain } from 'types/types';
import './Main.css';

class Main extends React.Component<IMain> {
  constructor(props: IMain) {
    super(props);
  }
  render() {
    return (
      <div className="main">
        <SearchBar
          value={this.props.value}
          onValueChange={this.props.onValueChange}
          onSubmit={this.props.onSubmit}
          onKeyDown={this.props.onKeyDown}
        />
        <Cards cards={this.props.cards} numShow={this.props.numShow} />
      </div>
    );
  }
}

export default Main;
