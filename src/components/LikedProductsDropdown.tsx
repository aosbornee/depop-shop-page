import { ClickAwayListener } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ProductsType } from '../types';
import './LikedProductsDropdown.css';

interface LikedProductsDropdownProps {
  likedProducts: string[];
  setIsDropdownActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function getNameForProduct(likedProduct: string, products: ProductsType) {
  const product = products.find((p) => p.id === likedProduct);

  if (product) return product.name;
  return '';
}

const LikedProductsDropdown = ({
  setIsDropdownActive,
  likedProducts,
}: LikedProductsDropdownProps) => {
  const { products } = useSelector((state: RootState) => state.product);

  return (
    <ClickAwayListener onClickAway={() => setIsDropdownActive(false)}>
      <div
        className="liked-products-dropdown"
        data-testid="liked-products-dropdown"
      >
        {likedProducts.map((product) => (
          <p
            key={product}
            className="header-product-name"
            data-testid="header-product-name"
          >
            {getNameForProduct(product, products)}
          </p>
        ))}
        {!likedProducts.length && <p>No Products Liked</p>}
      </div>
    </ClickAwayListener>
  );
};

export default LikedProductsDropdown;
