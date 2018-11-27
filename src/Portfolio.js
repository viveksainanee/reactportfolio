import React, { Component } from 'react';
import Intro from './Intro';
import Card from './Card';
import Navbar from './Navbar';
import Iconbar from './Iconbar';
import './Portfolio.css';
import uuid from 'uuid/v4';
import bravahome from './bravahome.png';
import bravafeed from './bravafeed.png';
import bravaconnected from './bravaconnected.png';
import yelpconsumer from './yelpconsumer.png';

class Portfolio extends Component {
  render() {
    let cards = [
      {
        color: 'rgb(244, 162, 10)',
        title: 'Web & Mobile Product Lead',
        blurb: `Since 2017, I led web and mobile product management at Brava, a company
        building intelligent, connected ovens.`,
        description: `During my time there, my team built a tool for recipe discovery, 
          an eCommerce solution for mealkits, a subscription program, a referral program,
          and various internal tools for the company. We leveraged a Django (Python) framework
          and built our apps for iOS, Android, and Web.`,
        photos: [bravahome, bravafeed, bravaconnected]
      },
      {
        color: 'rgb(200, 10, 23)',
        title: 'Reservations, Product Lead',
        blurb: `In 2015, I led Yelp . `,
        description:
          'Longer descriptionlkajs dlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdl fkjsdfjlklaksdjflkasjdflk descriptionl kajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk',
        photos: [yelpconsumer]
      },
      {
        color: 'rgb(78, 72, 238)',
        title: '33Web & Mobile Product',
        blurb: 'Since 2017, I led web and mobile software product at Brava',
        description:
          'Longer descriptionlkajs dlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdl fkjsdfjlklaksdjflkasjdflk descriptionl kajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk'
      },
      {
        color: 'rgb(28, 28, 28)',
        title: '44Web & Mobile Product',
        blurb: 'Since 2017, I led web and mobile software product at Brava',
        description:
          'Longer descriptionlkajs dlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdl fkjsdfjlklaksdjflkasjdflk descriptionl kajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk'
      },
      {
        color: 'rgb(78, 72, 238)',
        title: '5Web & Mobile Product',
        blurb: 'Since 2017, I led web and mobile software product at Brava',
        description:
          'Longer descriptionlkajs dlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk descriptionlkajsdlfkjasdl fkjsdfjlklaksdjflkasjdflk descriptionl kajsdlfkjasdlfkjsdfjlklaksdjflkasjdflk'
      }
    ];

    return (
      <div className="Portfolio container-fluid p-0">
        <Navbar />
        <Intro />
        <Iconbar />
        {cards.map(card => (
          <Card key={uuid()} {...card} />
        ))}
      </div>
    );
  }
}

export default Portfolio;
