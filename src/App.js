import React from 'react';
import logo from './LiftOffVR_text.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="form">
        <form
          action="https://formspree.io/xvopnywg"
          method="POST"
        >
          <label>
            <i>~Learn more~</i>
            <br />
            <input type="text" name="email" placeholder="email"/>
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
