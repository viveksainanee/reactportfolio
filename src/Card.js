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
      <div style={styles} className="Card col-12" id={this.props.section}>
        <div className="row">
          <div className="col-12 p-3 text-center">
            <Element name={this.props.section} className="element">
              {photos}
            </Element>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 p-3 pb-4 m-auto">
            <h2 className="title"> {this.props.title.toUpperCase()}</h2>
            <div className="blurb"> {this.props.blurb}</div>
            <div className="description"> {this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
