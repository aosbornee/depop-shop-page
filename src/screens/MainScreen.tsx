import { Button } from '@mui/material';
import React from 'react';
import './MainScreen.css';

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="main-screen-contents">
        <p>x Results</p>
        <Button variant="contained">Hide Sold Items</Button>
      </div>
    </div>
  );
};

export default MainScreen;
