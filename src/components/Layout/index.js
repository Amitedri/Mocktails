import React from "react";
import "./Layout.css";
import "./layoutMobile.css";
import Work from "./Work";
import Github from "./Github";
import Contact from "./Contact";
import About from "./About";
import Intro from './Intro'

const Layout = (props) => {
  const [list, setList] = React.useState();
  const [on, setOn] = React.useState(false);



  React.useEffect(() => {
    if (props.list) {
      setOn(true);
      setList(() => props.list);
    }
    console.log(props);
  }, [props]);



  const ResultsPopup = () => {
    if (on) {
      return (
        <div className="resultsPopup">
          {list.map((item) => {
            return (
              <div className="fieldList">
                <div>{item.strDrink}</div>
                <div>{item.strAlcoholic}</div>
                <div>{item.strGlass}</div>
              </div>
            );
          })}
        </div>
      );
    }
  };
 
  const [name, setName] = React.useState("intro");

  const handleComponentSelection = (event) => {
    return setName(() => event.target.id);
  };

  const DisplayComponent = ({ name }) => {
    switch (name) {
      case "about":
        return <About />;
      case "work":
        return <Work />;
      case "github":
        return <Github />;
      case "contact":
        return <Contact />;
      default:
        return <Intro />;
    }
  };

  return (
    <div className="layout">
      <div className="left">
        <DisplayComponent name={name} />
      </div>
      <div className="right">
        <div id="home" onClick={(event) => handleComponentSelection(event)} className="card">
          <h1>HOME</h1>
        </div>
        <div
          id="about"
          onClick={(event) => {
            handleComponentSelection(event);
          }}
          className="card"
        >
          <h1>ABOUT & CV</h1>
        </div>
        <div id="work" onClick={(event) => handleComponentSelection(event)} className="card">
          <h1>MY WORK</h1>
        </div>
        <div id="github" onClick={(event) => handleComponentSelection(event)} className="card">
          <h1>GITHUB</h1>
        </div>
        <div id="contact" onClick={(event) => handleComponentSelection(event)} className="card">
          <h1>CONTACT</h1>
        </div>
      </div>

    </div>
  );
};

export default Layout;
