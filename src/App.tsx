import React from 'react';
import './App.css';
import Header from './components/Header';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainScreen />
    </div>
  );
};

export default App;
