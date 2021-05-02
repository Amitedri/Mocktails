import React from "react";
import heroku from "../../assets/Icons/heroku.svg";
import mongoDB from "../../assets/Icons/mongodb.svg";
import react from "../../assets/Icons/react.svg";
import socket from "../../assets/Icons/socket-dot-io.svg";
import node from "../../assets/Icons/node-dot-js.svg";
import javascript from "../../assets/Icons/javascript.svg";
import amazong from "../../assets/Icons/amazonaws.svg";
import html from "../../assets/Icons/html5.svg";
import webpack from "../../assets/Icons/webpack.svg";
import slackIcon from "../../assets/Icons/slack 1.svg";
import call from "../../assets/Icons/call.svg";
import resume from "../../assets/Icons/resume-and-cv.svg";
import work from "../../assets/Icons/portfolio.svg";
import facebook from "../../assets/Icons/facebook.svg";
import ins from "../../assets/Icons/instagram.svg";
import linked from "../../assets/Icons/linkedin.svg";
import corner from "../../assets/Icons/corner.svg";
import "./Layout.css";
import "./layoutMobile.css";
const Intro = () => {
  const iconsArray = [heroku, mongoDB, react, socket, node, javascript, amazong, html, webpack];
  const sectorsArray = ["Prototyping", "Complex systems", "Costume Api's", "Landing pages"];
  const contactArray = [call, work, resume];
  const socialArray = [facebook, ins, linked];
  const skillsArray = [
    "Responsive design",
    "Costume Content",
    "Costume Images",
    "Domain & Hosting",
    "Cloud services/Api",
  ];
  const mapSkills = (list) => {
    return list.map((item) => {
      return (
        <div className="skillWrapper">
          <img src={slackIcon} alt={slackIcon} />
          <div className="skillText">{item}</div>
        </div>
      );
    });
  };
  const mapSectors = (list) => {
    return list.map((item) => {
      return (
        <div className="sectorWrapper">
          <img src={mongoDB} alt={mongoDB} />
          <div className="sectorText">{item}</div>
        </div>
      );
    });
  };
  const mapContacts = (list) => {
    return list.map((item) => {
      return (
        <div className="contactWrapper">
          <img src={item} alt={item} />
        </div>
      );
    });
  };
  const mapSocial = (list) => {
    return list.map((item) => {
      return (
        <div className="socialWrapper">
          <img src={item} alt={item} />
        </div>
      );
    });
  };
  const mapIcons = (list) => {
    return list.map((item) => {
      return (
        <div className="iconWrapper">
          <img src={item} alt={item} />
        </div>
      );
    });
  };
  return (
    <div className="introWrapper">
      <img className="corner" src={corner} alt={corner} />
      <img className="cornerBottom" src={corner} alt={corner} />
      <h1>Hello</h1>
      <h2>MY NAME IS AMIT</h2>
      <h3>AND I'M A FULL STACK DEVELOPER</h3>
      <h5>Creative Content is what i do.</h5>
      <div className="servicesContainer">
        <div className="icons">{mapIcons(iconsArray)}</div>
        <div className="services">{mapSkills(skillsArray)}</div>
        <div className="areasOfIntrest">{mapSectors(sectorsArray)}</div>
      </div>
      <div className="contactContainer">{mapContacts(contactArray)}</div>
      <div className="socialContainer">{mapSocial(socialArray)}</div>
    </div>
  );
};

export default Intro;
