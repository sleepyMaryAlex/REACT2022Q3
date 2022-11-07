import Progress from 'components/Progress/Progress';
import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import { useAppDispatch, useAppSelector } from 'hooks/hooks';
import React, { useEffect } from 'react';
import { fetchResults, selectIsFetching, selectResults } from 'store/mainSlice';
import './Main.scss';

function Main() {
  const isFetching = useAppSelector(selectIsFetching);
  const results = useAppSelector(selectResults);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResults());
  }, []);

  let content;
  if (results.length === 0) {
    content = <p className="main-message">Sorry, character not found</p>;
  } else {
    content = (
      <div className="main-container">
        <Results />
      </div>
    );
  }

  return isFetching ? (
    <div className="main">
      <Progress />
    </div>
  ) : (
    <div className="main">
      <SearchBar />
      {content}
    </div>
  );
}

export default Main;
