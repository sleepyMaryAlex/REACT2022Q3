import { getData } from 'app/loader';
import { IData } from '../types/types';
import { IMainState, IResult } from 'types/types';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { sort } from 'app/common';

const initialState: IMainState = {
  results: [],
  count: 0,
  currentPage: 1,
  query: '',
  index: null,
  sorting: 'byDefault',
  isFetching: true,
  nothingFound: false,
};

export const fetchResults = createAsyncThunk<IData | null, void, { state: RootState }>(
  'app/fetchResults',
  async (_, { getState }) => {
    const { currentPage, query } = getState().main;
    const data = await getData(currentPage, query);
    return data;
  }
);

export const mainSlice = createSlice({
  name: 'main',
  initialState,

  reducers: {
    setResults(state, action: PayloadAction<IResult[]>) {
      state.results = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSorting(state, action: PayloadAction<string>) {
      state.sorting = action.payload;
    },
    setIndex(state, action: PayloadAction<number | null>) {
      state.index = action.payload;
    },
    setNothingFound(state, action: PayloadAction<boolean>) {
      state.nothingFound = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        const results = action.payload?.results || [];
        if (results.length === 0) {
          state.nothingFound = true;
          state.isFetching = false;
        } else {
          const unsortedResults = [...results];
          state.results = sort(unsortedResults, state.sorting);
          state.count = action.payload?.info.count as number;
          state.nothingFound = false;
          state.isFetching = false;
        }
      })
      .addCase(fetchResults.rejected, (state) => {
        state.nothingFound = true;
        state.isFetching = false;
      });
  },
});

export const { setResults, setCurrentPage, setQuery, setSorting, setIndex, setNothingFound } =
  mainSlice.actions;

export default mainSlice.reducer;

export const selectResults = (state: RootState) => state.main.results;
export const selectCurrentPage = (state: RootState) => state.main.currentPage;
export const selectQuery = (state: RootState) => state.main.query;
export const selectSorting = (state: RootState) => state.main.sorting;
export const selectIndex = (state: RootState) => state.main.index;
export const selectIsFetching = (state: RootState) => state.main.isFetching;
export const selectNothingFound = (state: RootState) => state.main.nothingFound;
export const selectPages = (state: RootState) => Math.ceil(state.main.count / 20);
export const selectCount = (state: RootState) => state.main.count;
