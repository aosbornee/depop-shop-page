import React from 'react';
import { ProductType } from '../types';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';

interface ProductProps {
  product: ProductType;
}

const Product = ({ product }: ProductProps) => {
  console.log(product, 'product');
  return (
    <div className="product">
      <ProductImage imageUrl={product.img} imageName={product.name} />
      <ProductDescription />
    </div>
  );
};

export default Product;
