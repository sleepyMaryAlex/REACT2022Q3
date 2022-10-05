import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

test('check if the search image has been rendered and if it has a class', async () => {
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
