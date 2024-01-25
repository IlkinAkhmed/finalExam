import React from "react";
import "./index.scss";
import image from "../../../public/meat.png";

function Contact() {
  return (
    <div className="contact">
      <div className="cont-form">
        <div className="cont-head">
          <img src={image} alt="" />
          <div className="line"></div>
          <h2>Contact Us</h2>
        </div>
        <div className="form-inner">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Text Message" cols="150" rows="18"></textarea>
        </div>
        <button>Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
