import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <h2>You found a pile of gripes</h2>
          <a href="/gripe/Light">Light Gripes</a>
          <p>
            This section is for those little annoyances in life. You might
            not have experienced all of them, but they are familiar. These
            are things that you would shake your fist at when it happens
            to you but laugh a bit when it happens to someone else.
          </p>
          <a href="/gripe/Heavy">Heavy Gripes</a>
          <p>
            These are the gripes that might make you feel bad about humanity,
            life in general, your future and the future of your pets. These
            are real gripes that have no easy solution but should be
            acknowledged. Be warned.
          </p>
        </header>
      </div>
    );
  }
}

export default LandingPage;
