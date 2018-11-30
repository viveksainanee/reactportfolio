import React, { Component } from 'react';
import './Iconbar.css';
import yelplogo from './yelp.png';
import ebaylogo from './ebay.png';
import bravalogo from './brava.png';

class Iconbar extends Component {
  render() {
    return (
      <div className="Iconbar col-12">
        <h2 className="title"> ENGINEERING AND PRODUCT MANAGEMENT</h2>
        <div className="Icons-container container">
          <a href="#yelp">
            <img src={yelplogo} className="Icon" alt="icon" />
          </a>
          <a href="#ebay-idx">
            <img src={ebaylogo} className="Icon" alt="icon" />
          </a>
          <a href="#brava">
            <img src={bravalogo} className="Icon" alt="icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Iconbar;
