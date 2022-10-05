import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import Loader from 'app/loader';

test('should display the correct number of options', async () => {
  const handleClickByCuisine = jest.fn();
  const handleClickByDiet = jest.fn();
  const cards = await Loader.getCards('', 'all cuisines', 'all diets');
  render(
    <Dropdown
      cards={cards}
      handleClickByCuisine={handleClickByCuisine}
      handleClickByDiet={handleClickByDiet}
      cuisine="all cuisines"
      diet="all diets"
    />
  );
  expect(screen.getAllByRole('option').length).toBe(18);
});

test('check how many times an event fires', async () => {
  const handleClickByCuisine = jest.fn();
  const handleClickByDiet = jest.fn();
  const cards = await Loader.getCards('', 'all cuisines', 'all diets');
  render(
    <Dropdown
      cards={cards}
      handleClickByCuisine={handleClickByCuisine}
      handleClickByDiet={handleClickByDiet}
      cuisine="all cuisines"
      diet="all diets"
    />
  );
  const select = screen.getAllByRole('combobox');
  fireEvent.change(select[0]);
  expect(handleClickByCuisine).toHaveBeenCalledTimes(1);
});
