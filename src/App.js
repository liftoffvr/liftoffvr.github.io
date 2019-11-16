import React from 'react';
import logo from './LiftOffVR_text.png';
import './App.css';

function App({ ad }) {
  let formspreeId = ''

  if (ad === 'fb1') {
    formspreeId = 'mqkkgkkw'
  } else if (ad === 'fb2') {
    formspreeId = 'mzbbkbbq'
  } else if (ad === 'g1') {
    formspreeId = 'meqqpqqb'
  } else if (ad === 'g2') {
    formspreeId = 'xoqqpqqg'
  }
console.log("AD, ID", ad, formspreeId)
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="form">
        <form
          action={`https://formspree.io/${formspreeId}`}
          method="POST"
        >
          <label>
            <i>~Learn more~</i>
            <br />
            <input type="text" name="email" placeholder="email"/>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
