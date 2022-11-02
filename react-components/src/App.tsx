import AboutPage from 'components/AboutPage/AboutPage';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import Recipes from 'components/Recipes/Recipes';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HashRouter>
          <Header />
          <Routes>
            <Route index element={<Main />} />
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
