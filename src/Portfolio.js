import React, { Component } from "react";
import { Link } from "react-scroll";

import uuid from "uuid/v4";

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

class Portfolio extends Component {
  render() {
    function notifyMe() {
      // Let's check if the browser supports notifications
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }

      // Let's check whether notification permissions have already been granted
      else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
      }

      // Otherwise, we need to ask the user for permission
      else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
          // If the user accepts, let's create a notification
          if (permission === "granted") {
            var notification = new Notification("Hi there!");
          }
        });
      }

      // At last, if the user has denied notifications, and you
      // want to be respectful there is no need to bother them any more.
    }
    notifyMe();
    console.log("test");

    let cards = [
      {
        section: "starbucks",
        company: "starbucks",
        color: "rgb(40, 96, 68)",
        title: "Software Engineer",
        blurb: `I work on the Starbucks app, which handles 23M mobile payment users in the US alone.`,
        description: `The Starbucks app helps you find stores, place orders, and pay for your order. My team develops a GraphQL API for iOS, Android, and Web clients using NodeJS. We design, build, and maintain code for scale in order to provide the best experience possible to Starbucks consumers.`,
      },
      {
        section: "brava",
        company: "brava",
        color: "rgb(28, 28, 28)",
        title: "Group Product Manager, Web & Mobile",
        blurb: `I led web and mobile product management at Brava, a company
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
        blurb: `In 2013, I also led product for eBay Messages.`,
        description: `Millions of eBay shoppers use eBay Messages every day
        to confirm details or ask questions about an item. My team ran multi-variate
        A/B tests to optimize the flow, increasing revenue in UK and Germany by $257K. 
        We also refactored our code to RaptorJS to improve development velocity.`,
      },
    ];

    return (
      <div className="Portfolio container-fluid p-0 m-0">
        <Navbar />
        <Intro onClick={notifyMe()} />
        <Iconbar />
        {cards.map((card) => (
          <Card key={uuid()} {...card} />
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
