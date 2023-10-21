import React, { Component } from 'react';
import { Element } from 'react-scroll';
import Carousel from 'nuka-carousel';

import './Card.css';
import v4 from 'uuid/v4';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    let cardStyle = {
      backgroundColor: this.props.color,
      color: 'white',
      width: '100vw'
    };

    let photos;
    let phoneImgStyle = {
      width: '350px',
      margin: 'auto'
    };
    let ipadImgStyle = {
      width: '60%',
      maxWidth: '700px',
      margin: 'auto'
    };
    if (this.state.width < 800) {
      ipadImgStyle.marginTop = '20%';
    }

    if (this.props.photos) {
      photos = this.props.photos.map(photo => (
        <img
          src={typeof photo === 'object' ? photo.photoPath : photo}
          style={typeof photo === 'object' ? ipadImgStyle : phoneImgStyle}
          key={v4()}
          alt="mock"
        />
      ));
    }

    return (
      <div
        style={cardStyle}
        className="xs-p-0 sm-p-5 py-5"
        id={this.props.section}
      >
        <div className="col-xs-12 p-3 mb-0 text-center">
          <Element name={this.props.section} className="element">
            {photos !== undefined && this.state.width < 800 ? (
              <Carousel
                slidesToShow={1}
                width="100%"
                wrapAround={true}
                autoplay={true}
              >
                {photos}
              </Carousel>
            ) : (
              photos
            )}
          </Element>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-6 pt-0 pb-4 m-auto">
          <div className="company m-0"> {this.props.company}</div>
          <div className="title m-0"> {this.props.title.toUpperCase()}</div>
          <div className="blurb"> {this.props.blurb}</div>
          <div className="description"> {this.props.description}</div>
          <div className="learnMore"> {this.props.learnMore}</div>
        </div>
      </div>
    );
  }
}

export default Card;
