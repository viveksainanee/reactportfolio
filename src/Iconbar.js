import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Iconbar.css';
import yelplogo from './yelp.png';
import ebaylogo from './ebay.png';
import bravalogo from './brava.png';

class Iconbar extends Component {
  render() {
    return (
      <div className="Iconbar">
        <h2 className="title"> ENGINEERING AND PRODUCT MANAGEMENT</h2>
        <div className="Icons-container container">
          <img src={yelplogo} className="Icon" />
          <img src={ebaylogo} className="Icon" />
          <img src={bravalogo} className="Icon" />
          <img src={bravalogo} className="Icon" />
          <img src={bravalogo} className="Icon" />
        </div>
      </div>
    );
  }
}

export default Iconbar;
