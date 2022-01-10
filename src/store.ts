import { combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer } from './reducers';
import { DispatchType, ProductAction, ProductsState } from './types';

const reducer = combineReducers({
  product: productReducer,
});

export type RootState = ReturnType<typeof reducer>;

// Here we are checking if there is anything in our cart from our local storage
// If there is then we are setting it to our initial stage of our global store
// This means when the app refreshes, those items will be in the cart from previously

// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : [];

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null;

// const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
//   ? JSON.parse(localStorage.getItem('shippingAddress'))
//   : {};

const initialState = {
  // the cart reducer could have borth the cart items and the shipping address pulled in from local storage
  // cart: {
  //   cartItems: cartItemsFromStorage,
  //   shippingAddress: shippingAddressFromStorage,
  // },
  // userLogin: { userInfo: userInfoFromStorage },
};

const store: Store<ProductsState, ProductAction> & { dispatch: DispatchType } =
  createStore(reducer, initialState, composeWithDevTools());

export default store;
