import React from "react";
import "./Github.css";
import "./githubMobile.css";
import github from "../../assets/Icons/github.svg";
import heroku from "../../assets/Icons/heroku.svg";
import mongoDB from "../../assets/Icons/mongodb.svg";
import react from "../../assets/Icons/react.svg";
import socket from "../../assets/Icons/socket-dot-io.svg";
import node from "../../assets/Icons/node-dot-js.svg";
import javascript from "../../assets/Icons/javascript.svg";
import amazong from "../../assets/Icons/amazonaws.svg";
import html from "../../assets/Icons/html5.svg";
import webpack from "../../assets/Icons/webpack.svg";
import less from "../../assets/Icons/less.svg";
import babel from "../../assets/Icons/babel.svg";
import typescript from "../../assets/Icons/typescript.svg";

const Github = () => {
  const techIcons = [
    { src: typescript, text: "Typescript",grage:90 },
    { src: javascript, text: "Javascript/es5/es6",grage:90 },
    { src: react, text: "React",grage:90 },
    { src: node, text: "NodeJS Environemnt",grage:90 },
    { src: amazong, text: "AWS Cloud Services",grage:90 },
    { src: html, text: "HTML,CSS3",grage:90 },
    { src: webpack, text: "Webpack",grage:90 },
    { src: babel, text: "Babel",grage:90 },
    { src: less, text: "Less Css Processor ",grage:90 },
    { src: github, text: "Git version Control",grage:90 },
    { src: heroku, text: "Heroku Hosting",grage:90 },
    { src: mongoDB, text: "Mongo DB",grage:90 },
    { src: socket, text: "SocketIO",grage:90 },
  ];

  const projectsArray = [
    {
      name: "A portfolio for a Chef",
      description: "Built with React",
      link: "https://github.com/Amitedri/portfolio",
    },
    {
      name: "A portfolio for web developer",
      description: "Built with React and VanillaJs",
      link: "https://github.com/Amitedri/MikedunhamPortfolio",
    },
    {
      name: "Search cocktails in Huge Api of drinks.",
      description: "Built with with React",
      link: "https://github.com/Amitedri/Mocktails",
    },
    {
      name: "Mindfulness app to keep you grounded.",
      description: "Built mainly React,mongoDB,Express",
      link: "https://github.com/Amitedri/meditationApp",
    },
    {
      name: "Live Chat app with option to encrypt messages",
      description: "Built with React, Express,SocketIO",
      link: "https://github.com/Amitedri/IncChat",
    },
    {
      name: "Regiter/login compoents with express routing.",
      description: "Built with with React,MongoDB,Express",
      link: "https://github.com/Amitedri/Register-Login",
    },
  ];

  const handleClick = (item) => {
    window.open(item.link);
  };

  const renderGitProjects = (list) => {
    return list.map((item) => {
      return (
        <div onClick={() => handleClick(item)} className="wrappedGitItem">
          <span className="itemName">{item.name}</span>
          <span className="itemDescription">{item.description}</span>
        </div>
      );
    });
  };
  const renderIcons = (list) => {
    return list.map((icon) => {
      return (
        <div className="techItem">
          <img className="techIcon" src={icon.src} alt={icon.src} />
          <div className="techDescription">{`-${icon.text}`}</div>
        </div>
      );
    });
  };

  return (
    <div id="github" className="githubContainer">
      <div className="techStack">{renderIcons(techIcons)}</div>
      <div className="gitProjects">{renderGitProjects(projectsArray)}</div>
    </div>
  );
};

export default Github;
