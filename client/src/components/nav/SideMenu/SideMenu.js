import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './SideMenu.css';
class SideMenu extends Component {
  render() {
    return (
      <div className="Style">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {/* <p>Gripe as you please!</p> */}
          <Link to="/">About</Link><br></br>
          <Link to="/gripe/Light/">Light</Link><br></br>
          <Link to="/gripe/Heavy/">Heavy</Link><br></br>
          <Link to="/add-gripe/">Got a Gripe?</Link><br></br>
        </div>
    )}
}


export default SideMenu;
