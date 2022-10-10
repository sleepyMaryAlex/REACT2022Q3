import Loader from 'app/loader';
import AboutPage from 'components/AboutPage/AboutPage';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import Recipes from 'components/Recipes/Recipes';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { IAppState } from 'types/types';
import './App.css';

class App extends React.Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      cards: [],
      numShow: 30,
      isMainPage: true,
    };
  }

  setCurrentPage(isMainPage: boolean) {
    this.setState({ isMainPage });
  }

  displayNextCards(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    if (
      this.state.isMainPage &&
      Math.ceil(
        (e.target as HTMLDivElement).offsetHeight + (e.target as HTMLDivElement).scrollTop
      ) === (e.target as HTMLDivElement).scrollHeight
    ) {
      this.setState(({ cards, numShow }) => ({
        numShow: Math.min(numShow + 30, cards.length),
      }));
    }
  }

  async updateState(value: string, cuisine: string, diet: string) {
    this.setState({
      cards: await Loader.getCards(value, cuisine, diet),
    });
  }

  render() {
    return (
      <div className="app" onScroll={(e) => this.displayNextCards(e)}>
        <HashRouter>
          <Header />
          <Routes>
            <Route
              index
              element={
                <Main
                  cards={this.state.cards}
                  numShow={this.state.numShow}
                  setCurrentPage={this.setCurrentPage.bind(this)}
                  updateState={this.updateState.bind(this)}
                />
              }
            />
            <Route path="about" element={<AboutPage />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
