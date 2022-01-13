import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { addProducts } from '../actions/productActions';
import Product from '../components/Product';
import { RootState } from '../store';
import './MainScreen.css';

interface MainScreenProps {
  likedProducts: string[];
  setLikedProducts: React.Dispatch<React.SetStateAction<string[]>>;
}

const productsUrl =
  'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';

const MainScreen = ({ likedProducts, setLikedProducts }: MainScreenProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const [hideItems, setHideItems] = useState(false);

  let { products } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    async function fetchProducts(url: string) {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(addProducts(data));
    }

    fetchProducts(productsUrl);
  }, []);

  if (!products.length)
    return (
      <div className="main-screen">
        <div className="main-screen-contents">
          <p style={{ textAlign: 'center' }}>Loading...</p>
        </div>
      </div>
    );

  if (hideItems) products = products.filter((product) => product.sold !== true);

  return (
    <div className="main-screen">
      <div className="main-screen-contents">
        <div className="product-controls">
          <p className="product-results">
            {products.length ? `${products.length} Results` : 'No Results'}
          </p>
          <Button onClick={() => setHideItems(!hideItems)} variant="contained">
            {!hideItems ? 'Hide Sold Items' : 'Show Sold Items'}
          </Button>
        </div>
        <div className="products-section">
          {products.map((product) => (
            <Product
              likedProducts={likedProducts}
              setLikedProducts={setLikedProducts}
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
