import { GET_PRODUCTS } from '../constants/productConstants';
import { ProductsState, ProductsType } from '../types';

// interface LikeAction {
//   type: 'LIKE_PRODUCT';
//   payload: ProductType;
// }

// interface UnlikeAction {
//   type: 'UNLIKE_PRODUCT';
//   payload: ProductType;
// }

interface GetAction {
  type: 'GET_PRODUCTS';
  payload: ProductsType;
}

// type Action = GetAction | UnlikeAction | LikeAction;

type Action = GetAction;

const productReducer = (
  // eslint-disable-next-line default-param-last
  state: ProductsState = { products: [] },
  action: Action
): ProductsState => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { products: action.payload };

    default:
      return state;
  }
};

export default productReducer;
