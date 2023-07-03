import React from 'react';
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";

function Activity() {
  return (
    <section className="activity">
      <div className='title'>
        <h4>Recent Activities</h4>
        <h6>10 Jan 2022</h6>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <MdOutlineWaterDrop />
          </div>
          <div className="content">
            <h5>Water Bill</h5>
            <h5 className='color'>Successfully</h5>
          </div>
        </div>
        <div className="money">
          <h5>$120</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <GiPayMoney />
          </div>
          <div className="content">
            <h5>Income Salary</h5>
            <h5 className='color'>Received</h5>
          </div>
        </div>
        <div className="money">
          <h5>$4500</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <AiOutlineThunderbolt />
          </div>
          <div className="content">
            <h5>Electric Bill</h5>
            <h5 className='color'>Successfully</h5>
          </div>
        </div>
        <div className="money">
          <h5>$150</h5>
        </div>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <AiOutlineWifi />
          </div>
          <div className="content">
            <h5>Internet Bill</h5>
            <h5 className='color'>Successfully</h5>
          </div>
        </div>
        <div className="money">
          <h5>$60</h5>
        </div>
      </div>
    </section>
  );
}

export default Activity;
