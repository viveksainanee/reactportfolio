import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    const isMenuOpen = true;
    return (
      <div className="Menu">
        <Navbar isMenuOpen={isMenuOpen} />
        <div className="menu-items col-xs-12 m-auto text-center">
          <div className="menu-item">
            <Link to="/" className="menu-link">
              Home
            </Link>
          </div>
          <div className="menu-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://codenames.sainanee.com"
            >
              Covidnames
            </a>
          </div>
          <div className="menu-item">
            <Link to="/stopwatch" className="menu-link">
              Stopwatch (for HIIT)
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
