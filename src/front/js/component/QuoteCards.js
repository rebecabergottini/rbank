import React from "react";
import quotes from "../../img/quotes.png";



const QuoteCards = (props) => {
  return (
    <div className="quote section_padding">
      <div className="quote-head" >
        <img src={quotes} alt="not found" style={{width: "85px"}}/>
        <p>{props.text}</p>
      </div>
      <div className="quote-profile">
        <div className="quote-profile-img">
          <img src={props.img} alt="person" style={{ width: "142px", height: "150px" }} />
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
