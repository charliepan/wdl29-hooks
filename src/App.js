import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <h1>Value of input goes here</h1> */}
      <div>
        <input placeholder='Enter Your Name' />
      </div>
      {/* <h1>Count goes here</h1> */}
      <div>
        <button>Down</button>
        <button>Up</button>
      </div>
      {/* ImageURL placed here */}
    </div>
  );
}

export default App;
