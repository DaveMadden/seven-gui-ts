import React from 'react';
import './App.css';
import Circles from './Circles';
import Counter from './Counter'
import CRUD from './CRUD';
import FlightBooker from './FlightBooker';
import TempConv from './TempConv';
import { Timer } from './Timer';

function App() {
  return (
    <div className="app">
      <Counter />
      <TempConv />
      <FlightBooker />
      <Timer />
      <CRUD />
      <Circles/>
    </div>
  );
}

export default App;
