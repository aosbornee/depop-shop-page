/* global test, expect */

import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('Should render zero like count on mount', () => {
  const likedProducts: string[] = [];
  render(<Header likedProducts={likedProducts} />);

  const likedProductsLength = likedProducts.length;

  const likedProductsCount = screen.getByTestId('liked-products-count');

  expect(likedProductsLength).toBe(Number(likedProductsCount.innerHTML));
});

// test('On initial render dropdown should not be showing', () => {
//   const likedProducts: string[] = [];
//   render(<Header likedProducts={likedProducts} />);

//   const likedProductsDropdown = screen.getByTestId('liked-products-dropdown');
//   expect(likedProductsDropdown).not.toBeInTheDocument();
// });
