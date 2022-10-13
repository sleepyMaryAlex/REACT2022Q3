import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

class App extends React.Component<object, { openModal: boolean }> {
  constructor(props: object) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  setOpenModal(openModal: boolean) {
    this.setState({ openModal });
  }

  handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as HTMLDivElement;
    if (this.state.openModal && target.classList.contains('app__overlay')) {
      this.setState({ openModal: false });
    }
  }

  render() {
    const { openModal } = this.state;
    return (
      <div
        className={`app${openModal ? ' app__overlay' : ''}`}
        onClick={this.handleClick.bind(this)}
      >
        <HashRouter>
          <Header />
          <Routes>
            <Route
              index
              element={<Main openModal={openModal} setOpenModal={this.setOpenModal.bind(this)} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
