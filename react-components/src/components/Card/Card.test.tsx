import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from "./Card";
import Loader from 'app/loader';

test('card should contain title', async () => {
  const cards = await Loader.getCards('', 'all cuisines', 'all diets');
  render(<Card card={cards[0]} />);
  const title = cards[0].title;
  expect(screen.getByText(title, {exact: false})).toBeInTheDocument();
});