import React from 'react';
import logo from './logo.svg';
// /import './Difficulty.css';
import Chess from 'chess.js';

var chess = new Chess();

class Difficulty extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            look at me
        </div>
    );
  }
}

export default Difficulty;