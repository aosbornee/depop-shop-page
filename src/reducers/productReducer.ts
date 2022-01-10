import { GET_PRODUCTS } from '../constants/productConstants';
import { ProductAction, ProductsState } from '../types';

const productReducer = (
  // eslint-disable-next-line default-param-last
  state: ProductsState = { products: [] },
  action: ProductAction
): ProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    // return { products: action.payload };
    default:
      return state;
  }
};

export default productReducer;
