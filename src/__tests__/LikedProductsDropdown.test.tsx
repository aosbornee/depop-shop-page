/* global test, expect, jest */

import { render, screen, getAllByTestId } from '@testing-library/react';
import { Provider } from 'react-redux';
import LikedProductsDropdown from '../components/LikedProductsDropdown';
import store from '../store';

test('simple test to test ci/cd test', () => {
  const number = 5;
  expect(number).toBe(5);
});

test('number of product header name rows should = number of likedProducts', () => {
  const likedProducts: string[] = ['1', '2'];
  const setIsDropdownActive = jest.fn();
  render(
    <Provider store={store}>
      <LikedProductsDropdown
        likedProducts={likedProducts}
        setIsDropdownActive={setIsDropdownActive}
      />
    </Provider>
  );

  const likedProductsLength = likedProducts.length;

  const listNames = getAllByTestId(document.body, 'header-product-name');
  expect(listNames).toHaveLength(likedProductsLength);
});

test('when liked products array is empty, should show no products liked text', () => {
  const likedProducts: string[] = [];
  const setIsDropdownActive = jest.fn();
  render(
    <Provider store={store}>
      <LikedProductsDropdown
        likedProducts={likedProducts}
        setIsDropdownActive={setIsDropdownActive}
      />
    </Provider>
  );

  const noProductsLiked = screen.getByText('No Products Liked');
  expect(noProductsLiked).toBeInTheDocument();
});
