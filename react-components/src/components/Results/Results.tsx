import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import Cards from 'components/Cards/Cards';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React from 'react';
import {
  fetchResults,
  selectCount,
  selectCurrentPage,
  selectSorting,
  setCurrentPage,
  setSorting,
} from 'store/mainSlice';
import './Results.css';

function Results() {
  const count = useAppSelector(selectCount);
  const currentPage = useAppSelector(selectCurrentPage);
  const sorting = useAppSelector(selectSorting);
  const dispatch = useAppDispatch();

  function handleSortingChange(event: SelectChangeEvent<string>) {
    dispatch(setSorting(event.target.value));
    dispatch(fetchResults());
  }

  function handlePageChange(e: React.ChangeEvent<unknown>, page: number) {
    dispatch(setCurrentPage(page));
    dispatch(fetchResults());
  }

  return (
    <div className="results">
      <div className="results__container">
        <div className="cards__results">
          <p className="results__title">{count} results</p>
          <p className="results__title">
            page {currentPage}/{Math.ceil(count / 20)}
          </p>
        </div>
        <div className="results__wrapper">
          <Pagination
            className="pagination"
            count={Math.ceil(count / 20)}
            page={currentPage}
            variant="outlined"
            color="primary"
            onChange={handlePageChange}
            size="small"
          />
          <FormControl>
            <InputLabel id="select-label">Sorting</InputLabel>
            <Select
              labelId="select-label"
              value={sorting}
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
      <Cards />
    </div>
  );
}

export default Results;
