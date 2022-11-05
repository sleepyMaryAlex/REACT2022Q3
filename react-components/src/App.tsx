import About from 'components/About/About';
import AboutCharacter from 'components/AboutCharacter/AboutCharacter';
import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import { useAppSelector } from 'hooks/hooks';
import React, { createContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { selectQuery } from 'store/mainSlice';
import { persistor } from 'store/store';
import './App.scss';

export const QueryContext = createContext('');

function App() {
  const query = useAppSelector(selectQuery);

  return (
    <div className="app">
      <HashRouter>
        <PersistGate loading={null} persistor={persistor}>
          <QueryContext.Provider value={query}>
            <Header />
            <Routes>
              <Route index element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="characters" element={<Characters />} />
              <Route path="details" element={<AboutCharacter />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </QueryContext.Provider>
        </PersistGate>
      </HashRouter>
    </div>
  );
}

export default App;
