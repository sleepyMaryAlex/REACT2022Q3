import reducer from 'app/reducer';
import About from 'components/About/About';
import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React, { useReducer } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { IAppState } from 'types/types';
import './App.css';

const initialState: IAppState = {
  results: [],
  count: 0,
  currentPage: Number(localStorage.getItem('currentPage')) || 1,
  query: localStorage.getItem('query') || '',
  index: 0,
  isFetching: true,
  nothingFound: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Main state={state} dispatch={dispatch} />} />
          <Route path="about" element={<About />} />
          <Route path="characters" element={<Characters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
