import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './SideMenu.css';
class SideMenu extends Component {
  render() {
    return (
      <div>
          <p> This is the sideMenu component</p>
          <Link to="/blog/">Heavy Gripes</Link>
          <Link to="/">About</Link>
          <Link to="/write/">Got a gripe?</Link>
        </div>  
    )}
}


export default SideMenu;
