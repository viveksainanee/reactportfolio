import React, { Component } from 'react';
import Card from './Card';
import Navbar from './Navbar';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <Navbar />

        <Card color="rgb(28, 28, 28)" />

        <Card color="rgb(78, 72, 238)" />
        <Card color="rgb(28, 28, 28)" />
        <Card color="rgb(78, 72, 238)" />
      </div>
    );
  }
}

export default Portfolio;
