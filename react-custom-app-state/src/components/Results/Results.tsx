import { Pagination } from '@mui/material';
import Cards from 'components/Cards/Cards';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

function Results(props: IResults) {
  const { state, dispatch, handlePageChange } = props;
  return (
    <div className="results">
      <div className="results__container">
        <div className="cards__results">
          <p className="results__title">{state.count} results</p>
          <p className="results__title">
            page {state.currentPage}/{Math.ceil(state.count / 20)}
          </p>
        </div>
        <div className="results__pagination">
          <Pagination
            className="pagination"
            count={Math.ceil(state.count / 20)}
            page={state.currentPage}
            variant="outlined"
            color="standard"
            onChange={handlePageChange}
            size="small"
          />
        </div>
      </div>
      <Cards results={state.results} dispatch={dispatch} />
    </div>
  );
}

export default Results;
