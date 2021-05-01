import React from "react";
import "./Contact.css";
import me from "../../assets/me.png";
import facebook from "../../assets/Icons/facebook.svg";
import linkedin from "../../assets/Icons/linkedin.svg";
import whatsapp from "../../assets/Icons/whatsapp.svg";

const Contact = () => {
  return (
    <div id='contact' className="contactContainer">
      <div className="leftContainer">
        <img src={me} alt={me} />
      </div>
      <div className="rightCotainer">
        <h1>Ways to talk</h1>
        <div  className="contactField">
          <span>Phone</span>
          <span>052-2813907</span>
        </div>
        <div className="contactField">
          <span>Email</span>
          <span>amitedri778@gmail.com</span>
        </div>
        <div className="contactField">
          <span>Facebook</span>
          <img onClick={()=>window.open('https://www.facebook.com/amitedri778/')} src={facebook} alt={facebook} />
        </div>
        <div className="contactField">
          <span>Linked-in</span>
          <img src={linkedin} alt={linkedin} />
        </div>
        <div className="contactField">
          <span>WhatsApp</span>
          <img onClick={()=>window.open('https://wa.me/0522813907')} src={whatsapp} alt={whatsapp} />
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
