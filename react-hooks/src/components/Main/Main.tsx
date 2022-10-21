import Loader from 'app/loader';
import Modal from 'components/Modal/Modal';
import Progress from 'components/Progress/Progress';
import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { useEffect, useState } from 'react';
import { IMain, IResult } from 'types/types';
import './Main.css';

function Main(props: IMain) {
  const [results, setResults] = useState<IResult[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(localStorage.getItem('currentPage')) || 1
  );
  const [query, setQuery] = useState<string>(localStorage.getItem('query') || '');
  const [index, setIndex] = useState<number>(1);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [nothingFound, setNothingFound] = useState<boolean>(false);

  async function updateState(page: number, query: string) {
    const data = await Loader.getData(page, query);
    if (data) {
      const { results, info } = data;
      setResults(results);
      setPages(info.pages);
      setCount(info.count);
      setNothingFound(false);
    } else {
      setNothingFound(true);
    }
    setIsFetching(false);
  }

  useEffect(() => {
    updateState(currentPage, query);
    return () => {
      localStorage.setItem('currentPage', currentPage.toString());
    };
  }, [currentPage]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    setQuery(target.value);
  }

  function handleSubmit() {
    setCurrentPage(1);
    setIsFetching(true);
    updateState(1, query);
    localStorage.setItem('query', query);
  }

  let content;
  if (nothingFound) {
    content = <p className="main__message">Sorry, character not found</p>;
  } else {
    content = (
      <div className="main__container">
        <Results
          results={results}
          count={count}
          currentPage={currentPage}
          pages={pages}
          setOpenModal={props.setOpenModal}
          setIndex={setIndex}
        />
        {props.openModal && <Modal setOpenModal={props.setOpenModal} card={results[index]} />}
      </div>
    );
  }

  return isFetching ? (
    <div className="main">
      <Progress />
    </div>
  ) : (
    <div className="main">
      <SearchBar query={query} handleSubmit={handleSubmit} handleChange={handleChange} />
      {content}
    </div>
  );
}

export default Main;
