import { sort } from 'app/common';
import { getData } from 'app/loader';
import Progress from 'components/Progress/Progress';
import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect } from 'react';
import { IMain } from 'types/types';
import './Main.css';

function Main(props: IMain) {
  const { state, dispatch } = props;

  async function updateState(page: number, query: string) {
    const data = await getData(page, query);
    if (data) {
      const { results, info } = data;
      const initialResults = [...results];
      const sortedResults = sort(initialResults, state.sorting);
      dispatch({ type: 'SET_RESULTS', payload: sortedResults });
      dispatch({ type: 'SET_COUNT', payload: info.count });
      dispatch({ type: 'SET_NOTHING_FOUND', payload: false });
    } else {
      dispatch({ type: 'SET_NOTHING_FOUND', payload: true });
    }
    dispatch({ type: 'SET_FETCHING', payload: false });
  }

  useEffect(() => {
    const { currentPage, query } = state;
    updateState(currentPage, query);
  }, []);

  function onSubmit(query: string) {
    dispatch({ type: 'SET_PAGE', payload: 1 });
    dispatch({ type: 'SET_FETCHING', payload: true });
    updateState(1, query);
    localStorage.setItem('query', query);
  }

  function handlePageChange(event: React.ChangeEvent<unknown>, page: number) {
    dispatch({ type: 'SET_PAGE', payload: page });
    dispatch({ type: 'SET_FETCHING', payload: true });
    updateState(page, state.query);
    localStorage.setItem('currentPage', page.toString());
  }

  let content;
  if (state.nothingFound) {
    content = <p className="main__message">Sorry, character not found</p>;
  } else {
    content = (
      <div className="main__container">
        <Results state={state} dispatch={dispatch} handlePageChange={handlePageChange} />
      </div>
    );
  }

  return state.isFetching ? (
    <div className="main">
      <Progress />
    </div>
  ) : (
    <div className="main">
      <SearchBar query={state.query} onSubmit={onSubmit} dispatch={dispatch} />
      {content}
    </div>
  );
}

export default Main;
