import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';

var chess = new Chess();

class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="Home">

        <Chessboard position="start" />
  
    </div>
    );
  }
}

export default Home;
