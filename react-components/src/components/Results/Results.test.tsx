import React from 'react';
import { render, screen } from '@testing-library/react';
import Results from './Results';
import Loader from 'app/loader';

test('', async () => {
  const cards = await Loader.getCards('', 'all cuisines', 'all diets');
  const handleClickByCuisine = jest.fn();
  const handleClickByDiet = jest.fn();
  render(<Results
  handleClickByCuisine={handleClickByCuisine}
  handleClickByDiet={handleClickByDiet}
  cards={cards}
  numShow={100}
  cuisine='all cuisines'
  diet='all diets'
  />);
  expect(screen.getByText(/results/i)).toHaveClass('results__title');
});