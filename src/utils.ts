import React from 'react';
import { ProductType } from './types';

function likeOrUnlikeProduct(
  product: ProductType,
  isProductLiked: boolean,
  likedProducts: string[],
  setLikedProducts: React.Dispatch<React.SetStateAction<string[]>>
): void {
  if (isProductLiked) {
    setLikedProducts(likedProducts.filter((lp) => lp !== product.id));
  } else {
    setLikedProducts([...likedProducts, product.id]);
  }
}

export default likeOrUnlikeProduct;
