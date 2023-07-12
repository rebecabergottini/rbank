import React from "react";
import { Link } from "react-router-dom";

export default function Container(props) {
  return (
    <div className="business-left_content">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Link to="/signup" className="btn bg-blue-gradient">
        Get Started
      </Link>
      <br/>
          <br/>
    </div>
  );
}
