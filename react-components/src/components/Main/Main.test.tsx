import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';
import Loader from 'app/loader';

test('', async () => {
  const cards = await Loader.getCards('', 'all cuisines', 'all diets');
  const handleChange = jest.fn();
  const handleClickByCuisine = jest.fn();
  const handleClickByDiet = jest.fn();
  render(
    <Main
      value="cake"
      handleChange={handleChange}
      handleClickByCuisine={handleClickByCuisine}
      handleClickByDiet={handleClickByDiet}
      cards={cards}
      numShow={100}
      cuisine="all cuisines"
      diet="all diets"
    />
  );
  expect(screen.getAllByRole('img')[0]).toHaveClass('search__image');
});
