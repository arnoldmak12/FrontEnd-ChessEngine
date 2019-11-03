import React from 'react';
import Chess from 'chess.js';
import './Gameboard.css';
import Chessboard from 'chessboardjsx';
import Particles from 'react-particles-js';
import PropTypes from "prop-types";
import WithMoveValidation from './MoveValid';

var game = new Chess();

class Gameboard extends React.Component {
  static propTypes = { children: PropTypes.func };

  state = {
    fen: "start",
    // array of past game moves
    history: [],
  };

  componentDidMount() {
    this.game = new Chess();
    this.setState({ fen: game.fen() });
  }

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = this.game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q" // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return;
    this.setState(() => ({
      fen: this.game.fen(),
    }));
  };


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

        <Chessboard
          position={this.state.fen}
          darkSquareStyle={{ backgroundColor: '#B0C4DE' }}
          lightSquareStyle={{ backgroundColor: 'white' }}
          onDrop={this.onDrop}
          width="640"
          onMouseOutSquare={this.onMouseOverSquare}
        />

        {/* <WithMoveValidation /> */}

      </div>
    </div>

  );
}
}

export default Gameboard;