import Loader from 'app/loader';
import AboutPage from 'components/AboutPage/AboutPage';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ICard } from 'types/types';
import './App.css';

class App extends React.Component<
  object,
  { cards: [] | ICard[]; value: string; numShow: number; cuisine: string; diet: string }
> {
  constructor(props: object) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClickByCuisine = this.handleClickByCuisine.bind(this);
    this.handleClickByDiet = this.handleClickByDiet.bind(this);
    this.state = {
      cards: [],
      value: localStorage.getItem('value') || '',
      numShow: 30,
      cuisine: localStorage.getItem('cuisine') || 'cuisine',
      diet: localStorage.getItem('diet') || 'diet',
    };
  }
  async componentDidMount(cuisine = this.state.cuisine, diet = this.state.diet) {
    this.setState({
      cards: await Loader.getCards(this.state.value, cuisine, diet),
      cuisine: cuisine,
      diet: diet,
    });
  }
  componentWillUnmount() {
    const { value, cuisine, diet } = this.state;
    localStorage.setItem('value', value);
    localStorage.setItem('cuisine', cuisine);
    localStorage.setItem('diet', diet);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: (event.target as HTMLInputElement).value });
  }
  async handleSubmit() {
    const { value, cuisine, diet } = this.state;
    this.setState({
      cards: await Loader.getCards(value, cuisine, diet),
    });
  }
  async handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const { value, cuisine, diet } = this.state;
      this.setState({
        cards: await Loader.getCards(value, cuisine, diet),
      });
    }
  }
  async handleClickByCuisine(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    this.componentDidMount(target.value);
  }
  async handleClickByDiet(event: React.ChangeEvent<HTMLSelectElement>) {
    const target = event.target as HTMLSelectElement;
    const { cuisine } = this.state;
    this.componentDidMount(cuisine, target.value);
  }
  displayNextCards(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    if (
      Math.ceil(
        (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop
      ) === (e.target as HTMLDivElement).scrollHeight
    ) {
      this.setState(({ cards, numShow }) => ({
        numShow: Math.min(numShow + 30, cards.length),
      }));
    }
  }
  render() {
    const { cards, value, numShow } = this.state;
    return (
      <div className="app" onScroll={(e) => this.displayNextCards(e)}>
        <Header />
        <Routes>
          <Route
            index
            element={
              <Main
                value={value}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleKeyDown={this.handleKeyDown}
                handleClickByCuisine={this.handleClickByCuisine}
                handleClickByDiet={this.handleClickByDiet}
                cards={cards}
                numShow={numShow}
                cuisine={this.state.cuisine}
                diet={this.state.diet}
              />
            }
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
