import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [resret] = useState(false);
  const handleReverseClick = (event) => {
    event.preventDefault();
    setReverse(!reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={reverse ? 'reverse' : 'App-logo'} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          onClick={handleReverseClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
