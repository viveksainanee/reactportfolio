import React, { Component } from 'react';
import uuid from 'uuid/v4';

import Intro from './Intro';
import Card from './Card';
import Navbar from './Navbar';
import Iconbar from './Iconbar';
import Footer from './Footer';
import './Portfolio.css';

// import upicon from './images/upicon.png';

import bravahome from './images/bravahome.png';
import bravafeed from './images/bravafeed.png';
import bravaconnected from './images/bravaconnected.png';
import crschools from './images/crschools.png';
import crschooldetails from './images/crschooldetails.png';
import crblog from './images/crblog.png';
import yelpbizdetails from './images/yelpbizdetails.png';
// import yelpgrid from './images/yelpgrid.png';
import yelpfloor from './images/yelpfloor.png';
import ebayreg from './images/ebayreg.png';
import ebaysignin from './images/ebaysignin.png';
import ebayotp from './images/ebayotp.png';

class Portfolio extends Component {
  render() {
    let cards = [
      {
        section: 'coursereport',
        color: '#4F922F',
        title: 'Full-Stack Software Engineer',
        blurb: `In 2018, I led the engineering
        and product direction for Course Report on iOS and Android.`,
        description: `My team of 5 built iOS and Android apps for Course Report 
        in 2 weeks, using React Native. We built a Node.js proxy
        server to make server-side requests, building off Course Report's
        Ruby on Rails monolithic architecture. We utilized Fuse.js for search,
        NativeBase for UI components, and cached data with Redis, enabling 96% faster load times.
         `,
        photos: [crschools, crschooldetails, crblog]
      },

      {
        section: 'brava',
        color: 'rgb(244, 162, 10)',
        title: 'Head of Web & Mobile Product',
        blurb: `I led web and mobile product management at Brava, a company
        building intelligent, connected ovens.`,
        description: `During my time there, my team built a tool for recipe discovery, a grocery
          e-commerce solution, a subscription program, a referral program,
          and internal tools. We leveraged a Django (Python) framework
          and built our apps for iOS, Android, and Web.`,
        photos: [bravahome, bravafeed, bravaconnected]
      },
      {
        section: 'yelp',
        color: 'rgb(200, 10, 23)',
        title: 'Reservations, Product Lead',
        blurb: `From 2015 to 2017, I led product for Yelp's Restaurant Reservations team.`,
        description: `Over this time, my team grew Yelp Reservations by 
        +73%. We 2X'd the revenue of the Yelp Reservations business
          unit, and more importantly 4X'd the organic growth for 
          restaurants, to fuel self-sustaining growth. Our team worked on restaurant and
          table-planning features for iOS (Swift) and Web (React & Redux).`,
        photos: [
          yelpbizdetails,
          { photoPath: yelpfloor, type: 'ipad' }
          // ,
          // { photoPath: yelpgrid, type: 'ipad' }
        ]
      },
      {
        section: 'ebay-idx',
        color: 'rgb(28, 28, 28)',
        title: 'Identity Experience, Product Manager',
        blurb: 'I managed registration, sign-in, and profile page at eBay.',
        description: `By redesigning registration and sign-in at eBay, my team drove a +6% lift
          in registered-users-who-buy and a +19% increase in business registrations.
          I also led the product design direction for identity experience during eBay's iOS
          and Android 4.0 redesign, which went on to earn Apple's "Best New App" feature on
          iOS and "100M+ downloads" on Android.`,
        photos: [ebayreg, ebaysignin, ebayotp]
      },
      {
        section: 'ebay-messages',
        color: 'rgb(78, 72, 238)',
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
        {/* <img src={upicon} alt="up-icon" /> */}
      </div>
    );
  }
}

export default Portfolio;
