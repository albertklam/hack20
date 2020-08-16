import React from 'react';
import logo from './maskemoji.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Face Mask Detection
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <header className="App-body">
        <p>
          Wearing a mask is a deemed as a way to slow the spread of virus amid the Covid-19 pandemic.
          Our team trained a model that should detect whether the person in the image has face mask on or off. The model can be used in various ways:
        </p>
        <ul>
          <li > For grocery stores where face masks are required for entry. </li>
          <li> To detect if a person at a door is wearing a mask before you open it.</li>

        </ul>
        <button onClick={upload}>Upload your image</button>
      </header>
    </div>
    
  );
}

function upload() {
  alert("do something");
}

export default App;
