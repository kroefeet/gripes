import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './SideMenu.css';
class SideMenu extends Component {
  render() {
    return (
      <div>
          <p>Gripe as you please!</p>
          <Link to="/gripe/Heavy/">Heavy Gripes</Link><br></br>
          <Link to="/gripe/Light/">Light Gripes</Link><br></br>
          <Link to="/add-gripe/">Got a gripe?</Link><br></br>
          <Link to="/">About</Link><br></br>
        </div>  
    )}
}


export default SideMenu;