import React from 'react';
import logo from './logo.svg';
import './Home.css';
import Particles from 'react-particles-js';
import Chess from 'chess.js';

var select1 = ['option 1', 'option 2', 'option 3'];
var select2 = ['option 4', 'option 5', 'option 6'];

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-layout">

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

        <div className="welcome-box">
          <span className="welcome-header">
            Welcome to Bingus Inc. Chess Engine
          </span>
        </div>

        <div className="select-box">
          <span className="select-header">
            Select Opponent
          </span>
        </div>

        <div className="difficulty-box">

          <ul className="difficulty-list1">

            {select1.map((entry) => {
              return (
                <li className="difficulty-entry">

                  <button className="difficulty-name">

                    <span>{entry}</span>

                  </button>

                </li>
              )
            })}

          </ul>

          <ul className="difficulty-list2">

            {select2.map((entry) => {
              return (
                <li className="difficulty-entry">

                  <button className="difficulty-name">

                    <span>{entry}</span>

                  </button>

                </li>
              )
            })}

          </ul>

        </div>

      </div>
    );
  }
}

export default Home;
