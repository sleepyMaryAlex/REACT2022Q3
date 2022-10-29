import Cards from 'components/Cards/Cards';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

function Results(props: IResults) {
  const { state, dispatch } = props;
  return (
    <div className="results">
      <div className="results__container">
        <div className="cards__results">
          <p className="results__title">{state.count} results</p>
          <p className="results__title">
            page {state.currentPage}/{Math.ceil(state.count / 20)}
          </p>
        </div>
      </div>
      <Cards results={state.results} dispatch={dispatch} />
    </div>
  );
}

export default Results;
