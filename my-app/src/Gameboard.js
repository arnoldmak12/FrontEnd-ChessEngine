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
    history: [],
  };

  componentDidMount() {
    this.setState({ 
      fen: game.fen()
     });
  }

  onDrop = ({ sourceSquare, targetSquare }) => {
    // see if the move is legal
    let move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q"
    });

    // illegal move
    if (move === null) return;

    this.setState({
      fen: game.fen()
    });

    let postContents = "" + sourceSquare + targetSquare;

      console.log("White's Move: " + (postContents));
      console.log(game.fen().replace(/ /g, "%20"));
      $.ajax({
        // traditional: true,
        type: 'GET',
        async: false,   
        url: 'https://localhost:44338/api/test?fen=' + game.fen(),
        //contentType: 'application/json',
        dataType: 'text',
        // data: String(postContents),
        success: function (data) {
          console.log("FEN Passed to API: "+ 'https://localhost:44338/api/test?fen=' + game.fen());
          console.log("Black's Move: " + data);
          game.move({
             to: String(data).substring(2,4),
             from: String(data).substring(0,2),
             promotion: "q"
           });
           console.log("New FEN: "+ game.fen());
        },
        // error: fxnerrorptr
        error: function (jqXHR, error, errorThrown) {
          alert(jqXHR.responseText
          +"\n" + error
          +"\n" + errorThrown);
        }
      }); // always promote to a queen for example simplicity

    this.setState({
      fen: game.fen()
    });
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