import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./components/Layout";
import Github from "./components/Layout/Github";
import Contact from "./components/Layout/Contact";
import About from "./components/Layout/About";
import Work from "./components/Layout/Work";
import Intro from "./components/Layout/Intro";

const App = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const MobileView = () => {
    return (
      <div className="mobileDisplay">
        <Intro />
        <About />
        <Work />
        <Github />
        <Contact />
      </div>
    );
  };
  window.addEventListener("resize", (event) => {
    window.innerWidth < 500 ? setIsMobile(() => true) : setIsMobile(() => false);
  });

  return (
    <div className="App">
     {isMobile ?  <MobileView/> : <Layout/>}
    </div>
  );
};
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
