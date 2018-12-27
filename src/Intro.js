import React, { Component } from 'react';
import { Link } from 'react-scroll';

import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="Intro row m-0">
        <div className="col-xs-10 col-md-8 p-5 m-auto">
          <div className="Intro-text mb-4">
            Magic is around us if we choose to see it.
          </div>
          <div className="Intro-subtext">
            We{' '}
            <Link
              activeClass="active"
              id="Intro-link-brava"
              to="brava"
              smooth={true}
              offset={-5}
              duration={500}
            >
              summon food
            </Link>{' '}
            to our doorstep with a tap. We{' '}
            <Link
              activeClass="active"
              id="Intro-link-yelp"
              to="yelp"
              smooth={true}
              offset={-5}
              duration={500}
            >
              reserve tables
            </Link>{' '}
            at restaurants by asking Siri. We{' '}
            <Link
              activeClass="active"
              id="Intro-link-ebay"
              to="ebay-idx"
              smooth={true}
              offset={-5}
              duration={500}
            >
              transform items
            </Link>{' '}
            we don't want into money in our wallet. Technology is the magic of
            our time.{' '}
            <Link
              activeClass="active"
              id="Intro-link-contact"
              to="contact"
              smooth={true}
              offset={-5}
              duration={500}
            >
              Let's work together and build an inspiring future.{' '}
            </Link>{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
