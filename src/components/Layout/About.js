import React from "react";
import "./About.css";
import './aboutMobile.css'
import call from "../../assets/Icons/call.svg";
import email from '../../assets/Icons/resume-and-cv.svg';
import whatsapp from '../../assets/Icons/whatsapp.svg'

const About = () => {
  
  return (
    <div id='id' className="aboutContainer">
      <h1>{"<ABOUT ME/>"}</h1>
      <div className="aboutTopContainer">
        <h2>I’M AMIT , A PROGRAMMER AND WEB DEVELOPER</h2>
        <p>
          Developing any kind of idead with NodeJs and the current
          frameworks/Libararies, made web delopment more dynamic then ever and
          allows of to create really great cotent. everything is possible and
          can be done in many ways so we can scale and maintain great
          performance. Using lazyLoading to prevent long load time for
          e-commerce or Serverless apps, the selection of which technologies to
          use can be really tailored to the project.
        </p>
      </div>
      <div className="bottomAboutContainer">
        <h2>MY INSIPRATION</h2>
        <p>
          I always inspire and aware to make much clean and effeicient code as
          possible. keep my code easy read and understand and well documented.
          Working with design patterns and code standarts in the server and
          client-side. But its always good to rembmber that we are all students
          and there is always something to learn.
        </p>
        <div className='contactAboutContainer'>
            <img onClick={()=>window.open('tel:0522813907')} src={call} alt={call}/>
            <img onClick={()=>window.open('https://wa.me/0522813907')} src={whatsapp} alt={whatsapp}/>
            <img src={email} alt={email}/>
            <button onClick={()=>window.open('https://github.com/Amitedri')} className='gitButton'>MY GITHUB</button>
            <button className='cvButton'>DOWNLOAD CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
