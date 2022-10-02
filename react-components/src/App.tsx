import Loader from 'app/loader';
import AboutPage from 'components/AboutPage/AboutPage';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IState } from 'types/types';
import withGracefulUnmount from 'withGracefulUnmount';
import './App.css';

class App extends React.Component<object, IState> {
  constructor(props: object) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClickByCuisine = this.handleClickByCuisine.bind(this);
    this.handleClickByDiet = this.handleClickByDiet.bind(this);
    this.state = {
      cards: [],
      value: localStorage.getItem('value') || '',
      numShow: 30,
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
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              index
              element={
                <Main
                  value={value}
                  handleChange={this.handleChange}
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
        </BrowserRouter>
      </div>
    );
  }
}

export default withGracefulUnmount(App);
