import React from "react";
import "./Work.css";
import "./workMobile.css";
import nextButton from "../../assets/Icons/nextButton.svg";
import proj1 from "../../assets/project1.svg";
import proj2 from "../../assets/project2.svg";
import proj3 from "../../assets/project3.svg";

const Work = () => {
  const projectArray = [
    {
      src: proj1,
      techUsed: "React,Express,MongoDB",
      hostedOn: "netlify",
      description:
        "Meditation App built to help me and others to keep our mind clear. very intuitive user interface. responsive for all devices. ",
    },
    {
      src: proj2,
      techUsed: "React,Express,SocketIO",
      hostedOn: "Heroku",
      description:
        "Inc-Chat Live Chat app to chat with another people. made as fun side project for personal use and practice on using sockets. rooms are hard coded at the moment.",
    },
    {
      src: proj3,
      techUsed: "React,Styled-Components",
      hostedOn: "Heroku",
      description: "Portfolio App for a Chef. nothing too complicated.",
    },
    {
      src: proj3,
      techUsed: "React",
      hostedOn: "Heroku",
      description:
        "Mocktails is a really cool app to search in HUGE api of alcoholic bevergaes , you can filter by ingredients, glass,name, etc.",
    },
    {
      src: proj3,
      techUsed: "React,Styled-Components",
      hostedOn: "Netlify",
      description: "Portfolio made for a product manager.",
    },
  ];
  const [counter, setCounter] = React.useState(1);
  const renderWork = (list) => {
    for (let i = 0; i < list.length - 1; ) {
      return (
        <div className="projectDescriptionContainer">
          <h2>built with:{list[counter].techUsed}</h2>
          <span>About the project: {list[counter].description}</span>
        </div>
      );
    }
  };
  const slideImage = () => {
    for (let i = 0; i < projectArray.length - 1; ) {
      return <img src={projectArray[counter].src} />;
    }
  };
  const handleIncrement = () => {
    if (counter <= projectArray.length - 2) {
      setCounter((prevState) => prevState + 1);
    } else {
      setCounter(0);
    }
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevState) => prevState - 1);
      return;
    }
    setCounter(projectArray.length - 1);
  };
  return (
    <div id="work" className="workContainer">
      <div className="workHeader">
        <span>MY-</span>
        <h1> WORK</h1>
      </div>
      <div className="workProjectsContainer">
        <img className="nextButton" src={nextButton} alt={nextButton} onClick={handleIncrement} />
        <div className="projectsDisplay">{slideImage()}</div>
        <img className="prevButton" src={nextButton} alt={nextButton} onClick={handleDecrement} />
      </div>
      {renderWork(projectArray)}
    </div>
  );
};

export default Work;
