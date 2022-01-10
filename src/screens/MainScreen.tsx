import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addProducts } from '../actions/productActions';
import Product from '../components/Product';
import { RootState } from '../store';
// import { ProductsType } from '../types';
// import fetchProducts from '../utils';
import './MainScreen.css';

const productsUrl =
  'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';

const MainScreen = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    async function fetchProducts(url: string) {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(addProducts(data));
    }

    fetchProducts(productsUrl);
  }, []);

  if (!products.length) return <p>Loading</p>;

  return (
    <div className="main-screen">
      <div className="main-screen-contents">
        <div>
          <p>x Results</p>
          <Button variant="contained">Hide Sold Items</Button>
        </div>
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
