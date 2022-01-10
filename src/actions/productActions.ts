import {
  LIKE_PRODUCT,
  UNLIKE_PRODUCT,
  GET_PRODUCTS,
} from '../constants/productConstants';
import { ProductsType, ProductType } from '../types';

function addProducts(products: ProductsType) {
  return {
    type: GET_PRODUCTS,
    payload: products,
  };
}

function likeProduct(product: ProductType) {
  return {
    type: LIKE_PRODUCT,
    payload: product,
  };
}

function unlikeProduct(product: ProductType) {
  return {
    type: UNLIKE_PRODUCT,
    payload: product,
  };
}

export { addProducts, likeProduct, unlikeProduct };
