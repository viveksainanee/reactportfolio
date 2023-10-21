import React, { Component } from "react";

import { Element } from "react-scroll";
import { Link } from "react-router-dom";

import mail from "./images/mail.png";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import moreicon from "./images/moreicon.png";

import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const moreIconPath = this.props.isMenuOpen ? "/" : "/menu";

    let icons = [
      {
        href: "https://www.linkedin.com/in/sainanee/",
        imgSrc: linkedin,
        alt: "contact",
      }
    ];

    if (this.state.width > 500) {
      icons = [
        ...icons,
        {
          href:
            "https://mail.google.com/mail/?view=cm&fs=1&to=vivek@sainanee.com",
          imgSrc: mail,
          alt: "contact",
        },
        {
          href: "https://github.com/viveksainanee/",
          imgSrc: github,
          alt: "contact",
        },
      ];
    }

    return (
      <div className="Navbar">
        <Element name="navbar" className="element">
          <div className="Logo">SAINANEE</div>
        </Element>
        <div className="Contact ml-auto">
          {icons.map((icon) => (
            <a target="_blank" rel="noopener noreferrer" href={icon.href}>
              <img src={icon.imgSrc} alt={icon.alt} className="sm-logo" />
            </a>
          ))}
          <Link to={moreIconPath}>
            <img src={moreicon} alt="contact" className="sm-logo" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
