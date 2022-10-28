import About from 'components/About/About';
import Characters from 'components/Characters/Characters';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as HTMLDivElement;
    if (openModal && target.classList.contains('app__overlay')) {
      setOpenModal(false);
    }
  }

  return (
    <div className={`app${openModal ? ' app__overlay' : ''}`} onClick={handleClick}>
      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Main openModal={openModal} setOpenModal={setOpenModal} />} />
          <Route path="about" element={<About />} />
          <Route path="characters" element={<Characters />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
