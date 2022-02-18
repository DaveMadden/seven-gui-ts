import React from 'react';
import './App.css';
import Counter from './Counter'
import FlightBooker from './FlightBooker';
import TempConv from './TempConv';

function App() {
  return (
    <div className="app">
      <Counter />
      <TempConv />
      <FlightBooker />
    </div>
  );
}

export default App;
