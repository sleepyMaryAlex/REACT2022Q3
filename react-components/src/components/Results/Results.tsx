import Cards from 'components/Cards/Cards';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

function Results(props: IResults) {
  const { count, pages, currentPage, results, setOpenModal, setIndex } = props;
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
      <Cards results={results} setOpenModal={setOpenModal} setIndex={setIndex} />
    </div>
  );
}

export default Results;
