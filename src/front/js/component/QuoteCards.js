import React from "react";
import quotes from "../../img/quotes.svg";
import people01 from "../../img/people01.png";

const QuoteCards = (props) => {
  return (
    <div className="quote section_padding">
      <div className="quote-head">
        <img src={quotes} alt="not found" />
        <p>{props.text}</p>
      </div>
      <div className="quote-profile">
        <div className="quote-profile-img">
          <img src={props.image} alt="person" />
        </div>
        <div className="quote-profile-name">
          <h3>{props.name}</h3>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCards;
