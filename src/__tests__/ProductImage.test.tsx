/* global test, expect, jest */

import { render, screen } from '@testing-library/react';
import ProductImage from '../components/ProductImage';
import { ProductType } from '../types';

const product: ProductType = {
  id: '1',
  date: '2021-02-21T20:17:26.366Z',
  name: 'Arch Blick',
  img: 'https://placeimg.com/640/360/any',
  sold: true,
  price: '584.00',
  brand: 'Practical Steel Cheese',
  description: 'Executive backing up Function-based',
  seller: 'Leonor30',
  size: 'M',
};

test('Ensure Sold overlay appears if item is sold out', () => {
  const { sold, img, name } = product;
  const onClick = jest.fn();
  const isProductLiked = true;

  render(
    <ProductImage
      onClick={onClick}
      sold={sold}
      imageName={name}
      imageUrl={img}
      isProductLiked={isProductLiked}
    />
  );
  const soldModal = screen.getByTestId('sold-modal');
  expect(soldModal).toBeInTheDocument();
});
