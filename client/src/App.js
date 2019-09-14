import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import Gripes from './components/pages/Gripes/Gripes.js';
import LightGripe from './components/pages/LightGripe/LightGripe.js';
import HeavyGripe from './components/pages/HeavyGripe/HeavyGripe.js';
import SubmitGripe from './components/pages/SubmitGripe/SubmitGripe.js';

// TODO:  -create condition to filter Light vs Heavy to <Link>
//        -have only one, random, gripe to display on page.

// Light Gripes are Lvl 1
// Heavy Gripes are Lvl 2

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
            {/* <Link to="/gripe/">Heavy Gripes</Link>
            <Link to="/gripe/">Light Gripes</Link> */}
            <Link to="/">About</Link>
            <Link to="/add-gripe/">Got a gripe?</Link>
        </div>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/gripe/Light/' component={LightGripe} />
            <Route exact path='/gripe/Heavy/' component={HeavyGripe} />
            {/* <Route exact path='/gripe/' component={Gripes} /> */}
            <Route exact path='/add-gripe/' component={SubmitGripe} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;