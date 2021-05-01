import React from "react";
import "./Work.css";
import "./workMobile.css";
import nextButton from "../../assets/Icons/nextButton.svg";
import proj1 from "../../assets/project1.svg";
import proj2 from "../../assets/project2.svg";
import proj3 from "../../assets/project3.svg";

const Work = () => {
  const projectArray = [proj1, proj2, proj3];
  const [counter, setCounter] = React.useState(1);

  const slideImage = () => {
    for (let i = 0; i < projectArray.length - 1; ) {
      return <img src={projectArray[counter]} />;
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
      <div className="projectDescriptionContainer">
        <h2>Project Proccess</h2>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </span>
      </div>
    </div>
  );
};

export default Work;
