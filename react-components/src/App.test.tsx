import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('test app container click', () => {
  const handleClick = jest.fn();
  const openModal = true;
  const { container } = render(
    <div className={`app${openModal ? ' app__overlay' : ''}`} onClick={handleClick}></div>
  );
  const appContainer = container.firstChild as Element;
  userEvent.click(appContainer);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(container).not.toHaveClass('app__overlay');
});
