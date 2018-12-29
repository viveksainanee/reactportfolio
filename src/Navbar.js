import React, { Component } from 'react';

import { Element } from 'react-scroll';

import mail from './images/mail.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Element name="navbar" className="element">
          <div className="Logo">SAINANEE</div>
        </Element>
        <div className="Contact ml-auto">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vivek@sainanee.com"
          >
            <img src={mail} alt="contact" className="sm-logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sainanee/"
          >
            <img src={linkedin} alt="contact" className="sm-logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/viveksainanee/"
          >
            <img src={github} alt="contact" className="sm-logo" />
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
