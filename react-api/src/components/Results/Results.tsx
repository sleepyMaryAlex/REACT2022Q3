import Cards from 'components/Cards/Cards';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

class Results extends React.Component<IResults> {
  render() {
    const { count, pages, currentPage, results, setOpenModal, setIndex } = this.props;
    return (
      <div className="results">
        <div className="results__container">
          <div className="cards__results">
            <p className="results__title">{count} results</p>
            <p className="results__title">
              page {currentPage}/{pages}
            </p>
          </div>
        </div>
        <Cards results={results} count={count} setOpenModal={setOpenModal} setIndex={setIndex} />
      </div>
    );
  }
}

export default Results;
