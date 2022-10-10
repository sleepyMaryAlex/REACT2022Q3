import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DropdownDiet from './DropdownDiet';

test('should display the correct number of options', async () => {
  const handleClickByDiet = jest.fn();
  const cards = [
    {
      id: 716429,
      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
      image: '../../assets/images/diet.png',
      imageType: 'png',
    },
    {
      id: 715538,
      title: 'Bruschetta Style Pork & Pasta',
      image: '../../assets/icons/spoonacular.svg',
      imageType: 'svg',
    },
  ];
  render(<DropdownDiet cards={cards} handleClickByDiet={handleClickByDiet} diet="all diets" />);
  expect(screen.getAllByRole('option').length).toBe(9);
});

test('check how many times an event fires', async () => {
  const handleClickByDiet = jest.fn();
  const cards = [
    {
      id: 716429,
      title: 'Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs',
      image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
      imageType: 'jpg',
    },
    {
      id: 715538,
      title: 'Bruschetta Style Pork & Pasta',
      image: 'https://spoonacular.com/recipeImages/715538-312x231.jpg',
      imageType: 'jpg',
    },
  ];
  render(<DropdownDiet cards={cards} handleClickByDiet={handleClickByDiet} diet="all diets" />);
  const select = screen.getAllByRole('combobox');
  fireEvent.change(select[0]);
  expect(handleClickByDiet).toHaveBeenCalledTimes(1);
});
