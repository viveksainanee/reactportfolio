import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './Card.css';
import uuid from 'uuid/v4';

class Card extends Component {
  render() {
    let styles = {
      backgroundColor: this.props.color,
      color: 'white'
    };

    let photos;
    let imgStyles = {
      width: '350px'
    };

    if (this.props.photos) {
      photos = this.props.photos.map(photo => (
        <img src={photo} style={imgStyles} key={uuid()} alt="mock" />
      ));
    }

    return (
      <div style={styles} className="xs-p-0 sm-p-5" id={this.props.section}>
        <div className="col-12 p-3 mb-0 text-center">
          <Element name={this.props.section} className="element">
            {photos}
          </Element>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-6 pt-0 pb-4 m-auto">
          <div className="title m-0"> {this.props.title.toUpperCase()}</div>
          <div className="blurb"> {this.props.blurb}</div>
          <div className="description"> {this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Card;
