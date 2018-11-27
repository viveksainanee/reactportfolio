import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro row">
        <div className="Intro-text col-xs-10 col-md-8 p-5">
          Hi there! I'm Vivek, and I build technology.
        </div>
      </div>
    );
  }
}

export default Intro;
