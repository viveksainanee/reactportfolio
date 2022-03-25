import React, { Component } from "react";
import { Link } from "react-scroll";

import "./Intro.css";

class Intro extends Component {
  render() {
    return (
      <div className="Intro row m-0">
        <div className="col-xs-10 col-md-8 p-5 m-auto">
          <div className="Intro-text mb-4">
            Magic is around us if we choose to see it.
          </div>
          <div className="Intro-subtext">
            Imagine a steaming mug of{" "}
            <Link
              activeClass="active"
              id="Intro-link-sbux"
              to="starbucks"
              smooth={true}
              offset={-5}
              duration={500}
            >
              coffee, crafted with a tap.
            </Link>{" "}
            Or{" "}
            <Link
              activeClass="active"
              id="Intro-link-brava"
              to="brava"
              smooth={true}
              offset={-5}
              duration={500}
            >
              an intelligent oven
            </Link>{" "}
            that knows what's inside, and cooks each ingredient to perfection.
            Or the ability to{" "}
            <Link
              activeClass="active"
              id="Intro-link-yelp"
              to="yelp"
              smooth={true}
              offset={-5}
              duration={500}
            >
              reserve tables
            </Link>{" "}
            at restaurants by asking Siri. Or{" "}
            <Link
              activeClass="active"
              id="Intro-link-ebay"
              to="ebay-idx"
              smooth={true}
              offset={-5}
              duration={500}
            >
              transform items
            </Link>{" "}
            we don't want into money in our wallet. Technology is the magic of
            our time.{" "}
            <Link
              activeClass="active"
              id="Intro-link-contact"
              to="contact"
              smooth={true}
              offset={-5}
              duration={500}
            >
              Let's work together and build an inspiring future.{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
