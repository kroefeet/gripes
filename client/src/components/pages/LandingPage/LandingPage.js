import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './LandingPage.css';
class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <header className="LandingPage-header">
          <p>
            This is the already created<br />
            LandingPage component
          </p>
          <p>I was thinking that it could be that basis of the About page</p>
        </header>
      </div>
    );
  }
}

export default LandingPage;
