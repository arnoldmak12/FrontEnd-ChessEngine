import React from 'react';
import Chess from 'chess.js';
import './Gameboard.css';
import Chessboard from 'chessboardjsx';
import Particles from 'react-particles-js';


var chess = new Chess();

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gameboard-layout">
        <div className="background">
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 50,
                },
                "color": {
                  "value": "FFFFF0"
                },
                "line_linked": {
                  "enable": true,
                },
                "size": {
                  "value": 4,
                }
              }
            }}
          />
        </div>

        <div className="information-box">
          <span className="welcome-header">
            Difficulty:
          </span>
        </div>

        <div className="gameboard-box">

          <Chessboard position="start"
            darkSquareStyle={{ backgroundColor: '#B0C4DE' }}
            lightSquareStyle={{ backgroundColor: 'white' }}
          />

        </div>
      </div>

    );
  }
}

export default Gameboard;