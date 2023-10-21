import React, { Component } from "react";
import { Link } from "react-scroll";

import v4 from "uuid/v4";

import Intro from "./Intro";
import Card from "./Card";
import Navbar from "./Navbar";
import Iconbar from "./Iconbar";
import Footer from "./Footer";
import "./Portfolio.css";

import upicon from "./images/upicon.png";

import bravahome from "./images/bravahome.png";
import bravafeed from "./images/bravafeed.png";
import bravaconnected from "./images/bravaconnected.png";
import yelpbizdetails from "./images/yelpbizdetails.png";
import yelpfloor from "./images/yelpfloor.png";
import ebayreg from "./images/ebayreg.png";
import ebaysignin from "./images/ebaysignin.png";
import ebayotp from "./images/ebayotp.png";
import sbuxStores from "./images/find-stores.png";
import sbuxHome from "./images/home.png";
import sbuxCheckout from "./images/checkout.png";
import nikeEmail from "./images/nikeemail.png";

class Portfolio extends Component {
  render() {
    let cards = [
      {
        section: "twilio",
        company: "twilio",
        color: "rgb(200, 10, 23)",
        title: "Staff Engineer, Profile API",
        blurb: `Hey there, and welcome. I'm the engineering lead for the Twilio-Segment Profile API, an avenue of personalization used by Etsy, Nike, Dropbox, Chase, and many more.`,
        description: `When a Nike customer shops for shoes on multiple devices, our product allows Nike to get a consolidated view of the customer journey. Then, Profile API allows Nike to ping that customer at exactly the right time- like a birthday reward for the exact shoes they were looking at. My excellent team and I are working on redesigning the architecture, schema, and RPC services for the future of marketing.`,
        photos: [nikeEmail]
      },
      {
        section: "starbucks",
        company: "starbucks",
        color: "rgb(40, 96, 68)",
        title: "Engineering, GraphQL",
        blurb: `From 2019 to 2022, I worked on the GraphQL API layer for the Starbucks apps.`,
        description: `The Starbucks app helps you find stores, place orders, and pay.
        My team developed a backend-for-frontend, using GraphQL and NodeJS, for the Starbucks iOS, Android, and Web apps. 
        I led the "Order & Pay" domain's GraphQL work, which includes the screenshots you see above: Homepage/Usuals, Store Locator, and Checkout. My work included technical design, planning, coding, and testing. I also helped train and mentor new engineers, and as a team we scaled over 3X in throughput, to 2.63 billion requests per month.`,

        photos: [sbuxHome, sbuxStores, sbuxCheckout],
      },
      {
        section: "brava",
        company: "brava",
        color: "rgb(28, 28, 28)",
        title: "Group Product Manager, Web & Mobile",
        blurb: `I led web and mobile product at Brava, a company
        building intelligent, connected ovens.`,
        description: `Brava is building the future of home-cooking.  A recipe feed suggests 
        chef-curated meals, a grocery e-commerce marketplace lets
         you order food to your doorstep, and a mobile-connected 
         oven lets you cook from wherever you are. 
         
         My team built multiple CMSs (content management systems) to handle
         the social feed and grocery e-commerce. We also built a subscriptions
         product, referrals program, and integration with the intelligent Brava
         Oven. We leveraged a Django (Python) framework and built our apps for iOS, Android, and Web.`,
        photos: [bravahome, bravafeed, bravaconnected],
      },
      {
        section: "yelp",
        company: "yelp",
        color: "rgb(200, 10, 23)",
        title: "Product Manager, Reservations",
        blurb: `From 2015 to 2017, I was the product manager for Yelp's Restaurant Reservations team.`,
        description: `Over this time, my team grew Yelp Reservations by 
        +73%. We 2X'd the revenue of the Yelp Reservations business
          unit, and more importantly 4X'd the organic growth for 
          restaurants, to fuel self-sustaining growth. Our team worked on restaurant and
          table-planning features for iOS (Swift) and Web (React & Redux).`,
        photos: [yelpbizdetails, { photoPath: yelpfloor, type: "ipad" }],
      },
      {
        section: "ebay-idx",
        company: "ebay",
        color: "rgb(28, 28, 28)",
        title: "Product Manager, Identity Experience",
        blurb: "I managed registration, sign-in, and profile page at eBay.",
        description: `By redesigning registration and sign-in at eBay, my team drove a +6% lift
          in registered-users-who-buy and a +19% increase in business registrations.
          I also led the product design direction for identity experience during eBay's iOS
          and Android 4.0 redesign, which went on to earn Apple's "Best New App" feature on
          iOS and "100M+ downloads" on Android.`,
        photos: [ebayreg, ebaysignin, ebayotp],
      },
      {
        section: "ebay-messages",
        company: "ebay",
        color: "rgb(78, 72, 238)",
        title: "Product Manager, Messages and Loyalty",
        blurb: `I also led product for eBay Messages.`,
        description: `Millions of eBay shoppers use eBay Messages every day
        to confirm details or ask questions about an item. My team ran multi-variate
        A/B tests to optimize the flow, increasing revenue in UK and Germany by $257K. 
        We also refactored our code to RaptorJS to improve development velocity.`,
      },
    ];

    return (
      <div className="Portfolio container-fluid p-0 m-0">
        <Navbar />
        <Intro />
        <Iconbar />
        {cards.map((card) => (
          <Card key={v4()} {...card} />
        ))}
        <Footer />
        <div id="upicon">
          <Link
            activeClass="active"
            to="navbar"
            smooth={true}
            offset={-5}
            duration={500}
          >
            <img src={upicon} alt="up-icon" width="30px" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Portfolio;
