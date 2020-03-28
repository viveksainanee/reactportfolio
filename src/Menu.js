import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Navbar />
        <div className="menu-items col-xs-12 m-auto text-center">
          <div className="menu-item">
            <Link to="/" className="menu-link">
              Home
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/stopwatch" className="menu-link">
              Stopwatch
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
