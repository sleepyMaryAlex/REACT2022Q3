import appReducer from 'app/appReducer';
import About from 'components/About/About';
import AboutCharacter from 'components/AboutCharacter/AboutCharacter';
import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React, { createContext, useReducer } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { IAppState } from 'types/types';
import './App.css';

const initialState: IAppState = {
  results: [],
  count: 0,
  currentPage: Number(localStorage.getItem('currentPage')) || 1,
  query: localStorage.getItem('query') || '',
  index: null,
  sorting: localStorage.getItem('sorting') || 'byDefault',
  isFetching: true,
  nothingFound: false,
};

export const QueryContext = createContext(initialState.query);

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <div className="app">
      <HashRouter>
        <QueryContext.Provider value={state.query}>
          <Header results={state.results} index={state.index} />
          <Routes>
            <Route index element={<Main state={state} dispatch={dispatch} />} />
            <Route path="about" element={<About />} />
            <Route path="characters" element={<Characters />} />
            <Route
              path="details"
              element={
                <AboutCharacter results={state.results} index={state.index} dispatch={dispatch} />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QueryContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
