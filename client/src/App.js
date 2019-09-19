import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom'

import './App.css';
import './GripeWindow.css';

import LandingPage from './components/pages/LandingPage/LandingPage.js';
import LightGripe from './components/pages/LightGripe/LightGripe.js';
import HeavyGripe from './components/pages/HeavyGripe/HeavyGripe.js';
import MetaGripe from './components/pages/MetaGripe/MetaGripe.js';
import SubmitGripe from './components/pages/SubmitGripe/SubmitGripe.js';
import SideMenu from './components/nav/SideMenu/SideMenu.js';
import logo from './components/nav/logo/Gripe_logo.png';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-logo"></div>
        <nav className="App-navigation">
          <h1 className="App-title">Gripes <img src={logo}></img>  </h1>
        </nav>

        <div className="App-sideMenu">
        <SideMenu />
        </div>

        <div className="App-mainContent">
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/gripe/Light/' component={LightGripe} />
            <Route exact path='/gripe/Heavy/' component={HeavyGripe} />
            <Route exact path='/add-gripe/' component={SubmitGripe} />
            <Route exact path='/gripe/Meta/' component={MetaGripe} />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
