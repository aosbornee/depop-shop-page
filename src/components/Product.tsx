import React from 'react';
import { ProductType } from '../types';
import ProductDescription from './ProductDescription';
import ProductImage from './ProductImage';
import './Product.css';
import likeOrUnlikeProduct from '../utils';

interface ProductProps {
  product: ProductType;
  likedProducts: string[];
  setLikedProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

const Product = ({
  product,
  likedProducts,
  setLikedProducts,
}: ProductProps) => {
  const isProductLiked = !!likedProducts.find((lp) => lp === product.id);

  return (
    <div className="product">
      <ProductImage
        sold={product.sold}
        imageUrl={product.img}
        imageName={product.name}
        isProductLiked={isProductLiked}
        onClick={() =>
          likeOrUnlikeProduct(
            product,
            isProductLiked,
            likedProducts,
            setLikedProducts
          )
        }
      />
      <ProductDescription
        name={product.name}
        brand={product.brand}
        size={product.size}
        price={product.price}
      />
    </div>
  );
};

export default Product;
