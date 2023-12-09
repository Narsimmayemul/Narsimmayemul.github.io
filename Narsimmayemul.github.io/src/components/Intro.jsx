import React from "react";
import newPic from "../images/pictures/newPic.jpg";
import Typewriter from "typewriter-effect";

export default function Intro({ handleClick, boolean }) {
  return (
    <div id="home" className="hero" onClick={() => {
        if (boolean === false) handleClick();
      }}>
      <div className="home-img-cont">
        <div className="outer-circle circle circle-1">
          <span className="sq sq-1"></span>
          <span className="inner-circle circle" style={{display:"flex" , justifyContent:"center"}}>
            <img className="home-img" src={newPic} alt="profile" />
          </span>
          <span className="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        
        <div className="txt-light-red twent">
          Greetings, fellow developers!, Me...
        </div>
        <div id="user-detail-name" className="newname">
          Narsimma Yemul
        </div>
        <div className="bio what-i-do">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I Do Frontend.")
                .pause(2000)
                .deleteAll()
                .typeString("I Do Backend.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div>
          <div className="info">
          An enthusiastic Full Stack Web Developer with a strong set of technical skills like HTML, CSS, Javascript, React and nodeJs as well as non-technical skills and a dedication towards creating useful and interactive web applications using MERN stack..
          </div>
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
