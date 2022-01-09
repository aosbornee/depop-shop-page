import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('simple test to test ci/cd test', () => {
  const number = 5
  expect(number).toBe(5);
});
