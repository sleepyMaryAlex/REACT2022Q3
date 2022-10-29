import React from 'react';
import './SearchBar.css';
import icon from '../../assets/icons/icon.svg';
import { ISearchBar } from 'types/types';
import { SubmitHandler, useForm } from 'react-hook-form';

function SearchBar(props: ISearchBar) {
  const { dispatch, query } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ query: string }>({ mode: 'onChange', defaultValues: { query } });

  const onSubmit: SubmitHandler<{ query: string }> = (data) => {
    dispatch({ type: 'SET_QUERY', payload: data.query });
    props.onSubmit(data.query);
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
