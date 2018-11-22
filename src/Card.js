import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Card extends Component {
  render() {
    let styles = {
      backgroundColor: this.props.color,
      height: '100vh',
      color: 'white'
    };
    return (
      <div style={styles} className="Card">
        Hi there! I'm Vivek, a software engineer.
      </div>
    );
  }
}

export default Card;
