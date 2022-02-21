import React from 'react';
import './App.css';
import CircleDrawer from './CircleDrawer';
import Counter from './Counter'
import CRUD from './CRUD';
import FlightBooker from './FlightBooker';
import TempConv from './TempConv';
import { Timer } from './Timer';

function App() {
  return (
    <div className="app">
      <h1>Dave Madden & The Seven GUIs</h1>
      <Counter />
      <TempConv />
      <FlightBooker />
      <Timer />
      <CRUD />
      <CircleDrawer/>
    </div>
  );
}

export default App;
