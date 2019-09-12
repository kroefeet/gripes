// Initial roadblock:
// - There might be a problem with using MERN as a framework to our project.
// - Look into significantly changing CSS to deviate from MERN.

import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import LightGripe from './components/pages/LightGripe/LightGripe.js';
import HeavyGripe from './components/pages/HeavyGripe/HeavyGripe.js';
import WriteArticle from './components/pages/WriteArticle/WriteArticle.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-logo">logo placeholder</div>
        <nav className="App-navigation">
          <h1 className="App-title">Gripes</h1>
        </nav>

        <div className="App-sideMenu">
            <p> This is the sideMenu component</p>
            <Link to="/LightGripe/">Light Gripes</Link>
            <Link to="/HeavyGripe/">Heavy Gripes</Link>
            <Link to="/">About</Link>
            <Link to="/write/">Got a gripe?</Link>
        </div>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/LightGripe/' component={LightGripe} />
            <Route exact path='/HeavyGripe/' component={HeavyGripe} />
            <Route exact path='/write/' component={WriteArticle} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
