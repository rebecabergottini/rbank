import React from 'react';
import { BsCreditCard } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";

function Analytic() {
  return (
    <section className="analytic-section">
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BsCreditCard />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="money">
          <h5>$1200</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BiTransfer />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer</h6>
          <h6>Other Banks</h6>
        </div>
        <div className="money">
          <h5>$1200</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BsBank />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer</h6>
          <h6>Same Bank</h6>
        </div>
        <div className="money">
          <h5>$1500</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <GiTakeMyMoney />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer to</h6>
          <h6>Other Bank</h6>
        </div>
        <div className="money">
          <h5>$1500</h5>
        </div>
      </div>
    </section>
  );
}

export default Analytic;
