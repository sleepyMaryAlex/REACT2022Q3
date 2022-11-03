import React, { useContext } from 'react';
import './SearchBar.css';
import icon from '../../assets/icons/icon.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import { QueryContext } from 'App';
import { useAppDispatch } from 'hooks/hooks';
import { fetchResults, setCurrentPage, setQuery } from 'store/mainSlice';

function SearchBar() {
  const query = useContext(QueryContext);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ query: string }>({ mode: 'onChange', defaultValues: { query } });

  const onSubmit: SubmitHandler<{ query: string }> = (data) => {
    dispatch(setQuery(data.query));
    dispatch(setCurrentPage(1));
    dispatch(fetchResults());
  };

  return (
    <div className="search">
      <form className="search__container" onSubmit={handleSubmit(onSubmit)}>
        <p className="search__title">I want to find</p>
        <img className="search__image" src={icon} alt="icon" onClick={handleSubmit(onSubmit)} />
        <input
          className="search__bar"
          type="text"
          autoFocus
          {...register('query', { maxLength: 20 })}
          spellCheck="false"
        />
      </form>
      <p className="search__message">{errors.query && 'no more than 20 symbols'}</p>
    </div>
  );
}

export default SearchBar;
