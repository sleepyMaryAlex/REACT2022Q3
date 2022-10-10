import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { IMainState, IMain } from 'types/types';
import withGracefulUnmount from 'withGracefulUnmount';
import './Main.css';

class Main extends React.Component<IMain, IMainState> {
  constructor(props: IMain) {
    super(props);
    this.state = {
      value: localStorage.getItem('value') || '',
      cuisine: localStorage.getItem('cuisine') || 'all cuisines',
      diet: localStorage.getItem('diet') || 'all diets',
    };
  }

  async componentDidMount() {
    const { value, cuisine, diet } = this.state;
    this.props.updateState(value, cuisine, diet);
    this.props.setCurrentPage(true);
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
    this.props.setCurrentPage(false);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const { cuisine, diet } = this.state;
    const value = target.value;
    this.props.updateState(value, cuisine, diet);
    this.setState({ value });
  }

  handleClickByCuisine(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const { value, diet } = this.state;
    const cuisine = target.value;
    localStorage.setItem('cuisine', cuisine);
    this.props.updateState(value, cuisine, diet);
    this.setState({ cuisine: cuisine });
  }

  handleClickByDiet(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const { value, cuisine } = this.state;
    const diet = target.value;
    localStorage.setItem('diet', diet);
    this.props.updateState(value, cuisine, diet);
    this.setState({ diet: diet });
  }

  render() {
    return (
      <div className="main">
        <SearchBar value={this.state.value} handleChange={this.handleChange.bind(this)} />
        <Results
          cards={this.props.cards}
          handleClickByCuisine={this.handleClickByCuisine.bind(this)}
          handleClickByDiet={this.handleClickByDiet.bind(this)}
          cuisine={this.state.cuisine}
          diet={this.state.diet}
          numShow={this.props.numShow}
        />
      </div>
    );
  }
}

export default withGracefulUnmount(Main);
