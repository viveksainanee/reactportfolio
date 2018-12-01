import React, { Component } from 'react';
import { Link } from 'react-scroll';
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
          <Link
            activeClass="active"
            to="ebay-idx"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={ebaylogo} className="Icon" alt="icon" />
          </Link>
          <Link
            activeClass="active"
            to="yelp"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={yelplogo} className="Icon" alt="icon" />
          </Link>
          <Link
            activeClass="active"
            to="brava"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={bravalogo} className="Icon" alt="icon" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Iconbar;
