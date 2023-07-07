import React from "react";
import Button from "react-bootstrap/Button";
import Container from "./Container.js";
import Star from "../../img/star.svg";
import Shield from "../../img/shield.svg";
import Send from "../../img/send.svg";

const Business = () => {
  return (
    <div className="business section_padding">
      <Container
        title="You do the Business, we'll handle the money."
        description="With the right credit card, you can improve uyour financial life by
        building credit, earning rewards and saving money. But with hundreds
        of cerdit cards on the market."
      />

      <div className="business-right_content">
        <div className="righ-content">
          <div className="right-content-image">
            <img src={Star} alt="start" />
          </div>
          <div className="right-content-text">
            <h4>Rewards</h4>
            <p>
              The Best cedit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        <div className="righ-content">
          <div className="right-content-image">
            <img src={Shield} alt="shield" />
          </div>
          <div className="right-content-text">
            <h4>100% Secured</h4>
            <p>
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        <div className="righ-content">
          <div className="right-content-image">
            <img src={Send} alt="arrow" />
          </div>
          <div className="right-content-text">
            <h4>Balance Transfer</h4>
            <p>
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
