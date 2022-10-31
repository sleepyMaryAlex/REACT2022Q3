import appReducer from 'app/appReducer';
import About from 'components/About/About';
import AboutCharacter from 'components/AboutCharacter/AboutCharacter';
import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React, { createContext, useEffect, useReducer } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { IAppState } from 'types/types';
import './App.css';

export const QueryContext = createContext('');

function App() {
  let data;
  if (localStorage.getItem('appData')) {
    data = JSON.parse(localStorage.getItem('appData') as string);
  }
  const initialState: IAppState = {
    results: [],
    count: 0,
    currentPage: data?.currentPage || 1,
    query: data?.query || '',
    index: null,
    sorting: data?.sorting || 'byDefault',
    isFetching: true,
    nothingFound: false,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { currentPage, query, sorting } = state;

  useEffect(() => {
    const appData = { currentPage, query, sorting };
    localStorage.setItem('appData', JSON.stringify(appData));
  }, [currentPage, query, sorting]);

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
