import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainScreen from './screens/MainScreen';

const App = () => {
  // consider using context here instead of drilling props?
  const [likedProducts, setLikedProducts] = useState<string[]>([]);

  return (
    <div className="app">
      <Header likedProducts={likedProducts} />

      <MainScreen
        likedProducts={likedProducts}
        setLikedProducts={setLikedProducts}
      />
    </div>
  );
};

export default App;
