import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Step 1: Create a state variable to store the count value
  const [count, setCount] = useState(0);

  // Step 2: Functions to increment and decrement the count
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <div className="counter-container">
        <button className="btn" onClick={decrement}>-</button>
        <span className="count">{count}</span>
        <button className="btn" onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default App;
