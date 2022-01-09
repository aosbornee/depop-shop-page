import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('simple test to test ci/cd test', () => {
  const number = 5
  expect(number).toBe(5);
});

test('ensure p tag is rendered on screen', () => {
  render(<App />)
  const appParagraphElement = screen.getByText(/app/i)
  expect(appParagraphElement).toBeInTheDocument()
})