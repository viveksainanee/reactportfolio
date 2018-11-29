import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Logo">SAINANEE</div>
        <div className="Contact ml-auto">
          {/* vivek@sainanee.com */}
          {/* <Button outline color="primary">
            View Resume
          </Button> */}
        </div>
      </div>
    );
  }
}

export default Navbar;
