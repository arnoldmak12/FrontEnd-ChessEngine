/* global $ */
import React from 'react';
import Chess from 'chess.js';
import $ from 'jquery'
import './Gameboard.css';
import Chessboard from 'chessboardjsx';
import PropTypes from "prop-types";
import { existsTypeAnnotation } from '@babel/types';

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
      promotion: "q"
    });
    let postContents = sourceSquare + targetSquare;
      $.ajax({
        type: 'POST',
        accepts: 'application/json',
        data: JSON.stringify(postContents),
        contentType: 'application/json; charset-utf-8',
        dataType: 'json',
        success: fxnsuccessptr,
        error: fxnerrorptr
      }); // always promote to a queen for example simplicity

    // illegal move
    if (move === null) return;

    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '127.0.0.1:8080', true);
    // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    // xhr.send(JSON.stringify({postContents}));
    // xhr.onreadystatechange = function () { // Call a function when the state changes.
    //   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    //     // Request finished. Do processing here.
    //     this.game.move({
    //       from: this.responseText.substring(0, 2),
    //       to: this.responseText.substring(2, 4),
    //       promotion: this.responseText.substring(4)
    //     })
    //   }
    // }
    //xhr.send(JSON.stringify({ "move": postContents }));
    // window.onload( () => {
    //   $.ajax({
    //     type: 'POST',
    //     accepts: 'application/json',
    //     data: JSON.stringify(postContents),
    //     contentType: 'application/json; charset-utf-8',
    //     dataType: 'json',
    //     success: fxnsuccessptr,
    //     error: fxnerrorptr
    //   });
    // });

    function fxnsuccessptr(data) {
      this.setState(() => ({
        fen: this.game.fen()
      }));
    }

    function fxnerrorptr() {
      alert("error");
    }
  }
  


  render() {
    return (
      <div className="gameboard-layout">

        <div className="gameboard-box">

          <Chessboard
            position={this.state.fen}
            darkSquareStyle={{ backgroundColor: '#B0C4DE' }}
            lightSquareStyle={{ backgroundColor: 'white' }}
            onDrop={this.onDrop}
            width="640"
            onMouseOutSquare={this.onMouseOverSquare}
          />

        </div>
      </div>

    );
  }
}

export default Gameboard;