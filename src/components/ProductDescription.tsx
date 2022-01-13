import React from 'react';
import './ProductDescription.css';

interface ProductDescriptionProps {
  name: string;
  brand: string;
  size: string;
  price: string;
}

const ProductDescription = ({
  name,
  brand,
  size,
  price,
}: ProductDescriptionProps) => {
  return (
    <div className="product-description">
      <p>{name}</p>
      <p>{brand}</p>
      <p>{size}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductDescription;
