/* global $ */
import React from 'react';
import Chess from 'chess.js';
import $ from 'jquery'
import './Gameboard.css';
import Chessboard from 'chessboardjsx';
import PropTypes from "prop-types";

var game = new Chess();

class Gameboard extends React.Component {
  static propTypes = { children: PropTypes.func };

  state = {
    fen: "start",
    history: [],
    gameEnd: false,
    whiteMove: "",
    blackMove: "",
    turn: "",
    waitingOn: "w"
  };

  componentDidMount() {
    var turn = "";

    //Set the move for the player that went
    if(window.location.href.includes("white")){
      //console.log("White goes first")
      turn = "w";
    }
    else{
      //console.log("Black goes first")
      turn = "b";
      $.ajax({
        type: 'GET',   
        url: 'https://chess-engine.azurewebsites.net/api/values?fen=' + game.fen(),
        dataType: 'text',
        success: 
        (data) => {

          game.move({
             to: String(data).substring(2,4),
             from: String(data).substring(0,2),
             promotion: (data.length === 5 ? String(data).substring(4) : "q")
           });

            this.setState({
              fen: game.fen()
            })

           //console.log("New FEN: "+ game.fen());
           
            this.setState({
              whiteMove: String(data).substring(0,4),
              waitingOn: "b"
            })
          
        },
        // error: fxnerrorptr
        error: function (jqXHR, error, errorThrown) {
          alert(jqXHR.responseText
          +"\n" + error
          +"\n" + errorThrown);
        }
      }); // always promote to a queen for example simplicity
    }

    this.setState({ 
      fen: game.fen(),
      turn: turn
     });
  }

  onDrop = ({ sourceSquare, targetSquare, piece }) => {
    
    var beforeFen = game.fen();

    //console.log(piece);

    if (!piece.includes(this.state.turn)) return;

    // see if the move is legal
    let move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q"
    });
    

    // illegal move
    if (move === null) return;

    this.setState({
      fen: game.fen(),
      waitingOn: this.state.waitingOn === "w" ? "b" : "w"
    });

    let postContents = "" + sourceSquare + targetSquare;
    var state = this;

    if(this.state.turn === "w"){
      this.setState({
        whiteMove: postContents
      })
    }
    else{
      this.setState({
        blackMove: postContents
      })
    }

    if( !game.game_over() ) {
      $.ajax({
          type: 'GET',   
          url: 'https://chess-engine.azurewebsites.net/api/values?fen=' + game.fen(),
          dataType: 'text',
          success: 
          (data) => {

            //console.log("FEN Passed to API: "+ 'http://chess-engine.azurewebsites.net/api/values?fen=' + game.fen());

            var to = String(data).substring(2,4);
            var from = String(data).substring(0,2);

            if(String(data) === "O-O"){
              if(state.state.turn === "b"){
                to = "g1";
                from = "e1";
              }
              else{
                to = "g8";
                from = "e8";
              }
            }

            if(String(data) === "O-O-O"){
              if(state.state.turn === "b"){
                to = "c1";
                from = "e1";
              }
              else{
                to = "c8";
                from = "e8";
              }
            }

            game.move({
              to: to,
              from: from,
              promotion: (data.length === 5 ? String(data).substring(4) : "q")
            });

              state.setState({
                fen: game.fen(),
                waitingOn: this.state.waitingOn === "w" ? "b" : "w"
              })

            //console.log("New FEN: "+ game.fen());
            if(state.state.turn === "b"){
              state.setState({
                whiteMove: (from + to)
              })
            }
            else{
              state.setState({
                blackMove: (from + to)
              })
            }

            if(game.game_over()){
              //console.log("GAME OVER");
              state.setState({
                gameEnd: true
              });
            }
          },
          // error: fxnerrorptr
          error: function (jqXHR, error, errorThrown) {
            alert(jqXHR.responseText
            +"\n" + error
            +"\n" + errorThrown);
        }
      }); // always promote to a queen for example simplicity
    }

    this.setState({
      fen: game.fen(),
    });
  }

  onMoveEnd(){
    
    if(game.game_over()){
      //console.log("GAME OVER");
      this.state.setState({
        gameEnd: true
      });
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
            orientation={(this.state.turn === 'b' ? 'black' : 'white')}
            onDrop={this.onDrop}
            onMoveEnd={this.onMoveEnd}
            width="640"
            onMouseOutSquare={this.onMouseOverSquare}
            onMouseoverSquare={this.onMouseoverSquare}
            
          />

          <div className="moves">

            <div className="black">
                {this.state.waitingOn === "w" && <h1>Black's Move</h1>}
                {this.state.waitingOn === "b" && <h1 style={{color: "yellow"}}>Black's Move</h1>}
                <h2>{this.state.blackMove}</h2>
            </div>

            <div className="white">
                {this.state.waitingOn === "b" && <h1>White's Move</h1>}
                {this.state.waitingOn === "w" && <h1 style={{color: "yellow"}}>White's Move</h1>}
                <h2>{this.state.whiteMove}</h2>
            </div>

        {game.in_check() && !(game.in_checkmate()) && <h1 className="game-over-message">Check</h1>}

        { this.state.gameEnd ?
          <div>
              {game.in_checkmate() && <h1 className="game-over-message">Checkmate</h1>}
              {game.in_stalemate() && <h1 className="game-over-message">Stalemate</h1>}
              {game.in_draw() && <h1 className="game-over-message">Draw</h1>}
          </div>
          : null }

          </div>

        </div>

      </div>

    );
  }
}

export default Gameboard;