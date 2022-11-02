import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { sort } from 'app/common';
import Cards from 'components/Cards/Cards';
import React from 'react';
import { IResults } from 'types/types';
import './Results.css';

function Results(props: IResults) {
  const { state, dispatch, handlePageChange } = props;

  function handleSortingChange(event: SelectChangeEvent<string>) {
    const value = event.target.value;
    dispatch({ type: 'SET_SORTING', payload: value });
    const results = [...state.results];
    const sortedResults = sort(results, value);
    dispatch({ type: 'SET_RESULTS', payload: sortedResults });
  }

  return (
    <div className="results">
      <div className="results__container">
        <div className="cards__results">
          <p className="results__title">{state.count} results</p>
          <p className="results__title">
            page {state.currentPage}/{Math.ceil(state.count / 20)}
          </p>
        </div>
        <div className="results__wrapper">
          <Pagination
            className="pagination"
            count={Math.ceil(state.count / 20)}
            page={state.currentPage}
            variant="outlined"
            color="primary"
            onChange={handlePageChange}
            size="small"
          />
          <FormControl>
            <InputLabel id="select-label">Sorting</InputLabel>
            <Select
              labelId="select-label"
              value={state.sorting}
              className="sorting"
              onChange={handleSortingChange}
            >
              <MenuItem value="byDefault">By default</MenuItem>
              <MenuItem value="byNameASC">By name ↑</MenuItem>
              <MenuItem value="byNameDESC">By name ↓</MenuItem>
              <MenuItem value="byStatusASC">By status ↑</MenuItem>
              <MenuItem value="byStatusDESC">By status ↓</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <Cards results={state.results} dispatch={dispatch} />
    </div>
  );
}

export default Results;
