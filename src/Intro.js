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
              summon groceries
            </Link>{' '}
            to our doorstep. We{' '}
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
            at restaurants by asking Siri. We vanish the items we don't want,
            transforming them to money in our wallet. Technology is the magic of
            our time. Let's work together and build an inspiring future.
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
