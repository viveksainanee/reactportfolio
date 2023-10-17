import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './Iconbar.css';
import yelplogo from './images/yelp.png';
import ebaylogo from './images/ebay.png';
import bravalogo from './images/brava.png';
// import crlogo from './images/cr.png';
import starbuckslogo from './images/starbucks.png';
import twiliologo from './images/twilio.png';

class Iconbar extends Component {
  render() {
    return (
      <div className="Iconbar col-12">
        <h2 className="title"> ENGINEERING & PRODUCT MANAGEMENT</h2>
        <div className="Icons-container container">
          <Link
            activeClass="active"
            to="twilio"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={twiliologo} className="Icon" alt="icon" />
          </Link>

          <Link
            activeClass="active"
            to="starbucks"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={starbuckslogo} className="Icon" alt="icon" />
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
            to="ebay-idx"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={ebaylogo} className="Icon" alt="icon" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Iconbar;
