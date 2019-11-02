import React from 'react';
import logo from './logo.svg';
import './Home.css';
<<<<<<< HEAD
import Gameboard from './Gameboard';
import Particles from 'react-particles-js';
import Chess from 'chess.js';
import Options from './Options';
import test from './test'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

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

      <Switch>
            <Route exact path="/"  component={Options} />
            <Route path="/play" component={test} />
            <Redirect to="/" />
      </Switch>

        

      </div>
    );
  }
}

export default Home;
