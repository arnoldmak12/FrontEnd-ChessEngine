import React from 'react';
import logo from './logo.svg';
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
      <div className="Gameboard-layout">
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
        
     
        <div className = "Gameboard-background">
       {/* /* <img src="/background.jpg" />*/ }
          <div className = "Gameboard-box">
          
            <Chessboard position="start"
            darkSquareStyle = {{backgroundColor : '#B0C4DE'}}
            lightSquareStyle = {{backgroundColor : 'white'}}

              
            
             />
            <div className = "Gauge-box">
            
            </div>
          </div>
        </div>

      

    </div>
        
    );
  }
}

export default Gameboard;