import React from 'react';

import '../styles/normalize.css';
import '../styles/App.scss';

import chicken from '../assets/chicken.png';

export default function App() {
  return (
    <div class="App">
      <h2>What the bawk?</h2>
      <img src={chicken}/>
    </div>
  );
}
