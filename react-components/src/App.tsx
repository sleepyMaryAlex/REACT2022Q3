import AboutPage from 'components/AboutPage/AboutPage';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
