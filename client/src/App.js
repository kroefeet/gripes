import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import LightGripe from './components/pages/LightGripe/LightGripe.js';
import HeavyGripe from './components/pages/HeavyGripe/HeavyGripe.js';
import SubmitGripe from './components/pages/SubmitGripe/SubmitGripe.js';

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
            <Link to="/gripe/Light/">Light Gripes</Link>
            <Link to="/gripe/Heavy/">Heavy Gripes</Link>
            <Link to="/">About</Link>
            <Link to="/add-gripe/">Got a gripe?</Link>
        </div>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/gripe/Light/' component={LightGripe} />
            <Route exact path='/gripe/Heavy/' component={HeavyGripe} />
            <Route exact path='/add-gripe/' component={SubmitGripe} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;