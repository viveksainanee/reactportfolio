import React, { Component } from 'react';
import Intro from './Intro';
import Card from './Card';
import Navbar from './Navbar';
import Iconbar from './Iconbar';
import Footer from './Footer';
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
        blurb: `From 2015 to 2017, I led product for Yelp's Restaurant Reservations team.`,
        description: `Over this time, my team grew Yelp Reservations by 
        +73%. We 2X'd the revenue of the Yelp Reservations business
          unit, and more importantly 4X'd the organic growth for 
          restaurants, to fuel self-sustaining growth. Our team worked on restaurant and
          table-planning features for iOS (Swift) and Web (React & Redux).`,
        photos: [yelpconsumer]
      },
      {
        color: 'rgb(78, 72, 238)',
        title: 'Identity Experience, Product Manager',
        blurb:
          'In 2013, I began to manage registration, sign-in, and profile page at eBay.',
        description: `By redesigning registration and sign-in at eBay, my team drove a +6% lift
          in registered-users-who-buy and a +19% increase in business registrations.
          I also led the product design direction for identity experience during eBay's iOS
          and Android 4.0 redesign, which went on to earn Apple's "Best New App" feature on
          iOS and "100M+ downloads" on Android.
          `
      },
      {
        color: 'rgb(28, 28, 28)',
        title: 'Messages, Product Manager',
        blurb: `In 2013, I also led product for eBay Messages.`,
        description: `Millions of eBay shoppers use eBay Messages every day
        to confirm details or ask questions about an item. My team ran multi-variate
        A/B tests to optimize the flow, increasing revenue in UK and Germany by $257K. 
        We also refactored our code to RaptorJS to improve development velocity.`
      }
    ];

    return (
      <div className="Portfolio container-fluid p-0 m-0">
        <Navbar />
        <Intro />
        <Iconbar />
        {cards.map(card => (
          <Card key={uuid()} {...card} />
        ))}
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
