import React from 'react';
import { FcSimCardChip } from "react-icons/fc";

function Card() {
  return (
    <section className="card-section">
      <div className="shopping">
        <div className="design">
          <FcSimCardChip />
        </div>
        <div className="number">
          <h6>4562 1122 4595 7852</h6>
        </div>
        <div className="image">
          <img src="src\front\assets\mastercard.png" className="pic" alt="Mastercard" />
        </div>
        <div className="name">
          <h6>CARD HOLDER</h6>
        </div>
        <div className="profile">
          <h6>AAE IdeaPro</h6>
          <span className="t1">Mastercard</span>
        </div>
      </div>
    </section>
  );
}

export default Card;
