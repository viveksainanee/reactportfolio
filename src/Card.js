import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Card.css';

class Card extends Component {
  render() {
    let styles = {
      backgroundColor: this.props.color,
      color: 'white'
    };

    let photos;
    if (this.props.photos) {
      photos = this.props.photos.map(photo => (
        <img src={photo} width="400px" />
      ));
    }

    return (
      <div style={styles} className="Card col-12">
        <div className="row">
          <div className="col-xs-12 p-3 pb-4 m-auto">{photos}</div>
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
