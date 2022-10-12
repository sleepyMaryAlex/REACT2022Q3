import Loader from 'app/loader';
import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { IMainState } from 'types/types';
import './Main.css';

class Main extends React.Component<object, IMainState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      value: localStorage.getItem('value') || '',
      cuisine: localStorage.getItem('cuisine') || 'all cuisines',
      diet: localStorage.getItem('diet') || 'all diets',
    };
  }

  async updateState(value: string, cuisine: string, diet: string) {
    this.setState({
      cards: await Loader.getCards(value, cuisine, diet),
    });
  }

  async componentDidMount() {
    const { value, cuisine, diet } = this.state;
    this.updateState(value, cuisine, diet);
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const { cuisine, diet } = this.state;
    const value = target.value;
    this.updateState(value, cuisine, diet);
    this.setState({ value });
  }

  handleClickByCuisine(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const { value, diet } = this.state;
    const cuisine = target.value;
    localStorage.setItem('cuisine', cuisine);
    this.updateState(value, cuisine, diet);
    this.setState({ cuisine: cuisine });
  }

  handleClickByDiet(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const { value, cuisine } = this.state;
    const diet = target.value;
    localStorage.setItem('diet', diet);
    this.updateState(value, cuisine, diet);
    this.setState({ diet: diet });
  }

  render() {
    return (
      <div className="main">
        <SearchBar value={this.state.value} handleChange={this.handleChange.bind(this)} />
        <Results
          cards={this.state.cards}
          handleClickByCuisine={this.handleClickByCuisine.bind(this)}
          handleClickByDiet={this.handleClickByDiet.bind(this)}
          cuisine={this.state.cuisine}
          diet={this.state.diet}
        />
      </div>
    );
  }
}

export default Main;
