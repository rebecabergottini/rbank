import React from "react";
import robot from "../../img/robot.png"

const Hero = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="home-content-heading">
          <h1>
            The first online bank you
            <span className="text-gradient"> will fall in love with</span>
          </h1>
        </div>
        <div className="home-content-paragraph">
          <p>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>
      <div className="home-image">
        <img src={robot} alt="robot Image" />
        <div className="gradient-start pink__gradient" />
        <div className="gradient-mid white__gradient" />
        <div className="gradient-end blue__gradient" />
      </div>
    </div>
  );
};

export default Hero;
