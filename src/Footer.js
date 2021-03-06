import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="contact" className="footer">
        <a
          id="footer-email"
          target="_blank"
          rel="noopener noreferrer"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=vivek@sainanee.com"
        >
          vivek@sainanee.com
        </a>
      </div>
    );
  }
}

export default Footer;
