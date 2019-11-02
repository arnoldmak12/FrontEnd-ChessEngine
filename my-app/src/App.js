import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';

var chess = new Chess();

function App() {
  return (
    <div className="App">
      
      <Chessboard position="start" />

    </div>
  );
}

export default App;
