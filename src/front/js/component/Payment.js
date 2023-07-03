import React from 'react';
import { BiHomeAlt, BiCar } from "react-icons/bi";

function Payment() {
  return (
    <section className='section-payment'>
      <div className='title'>
        <h4>Upcoming Payments</h4>
        <h6>13 Jan 2022</h6>
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BiHomeAlt />
          </div>
          <div className="content">
            <h5>Home Rent</h5>
            <h5 className='color'>Pending</h5>
          </div>           
        </div>
        <div className="money">
          <h5>$1500</h5>                 
        </div>         
      </div>
      <div className="analytic">
        <div className="design">
          <div className="logo">
            <BiCar />
          </div>
          <div className="content">
            <h5>Car Insurance</h5>
            <h5 className='color'>Pending</h5>
          </div>              
        </div>
        <div className="money">
          <h5>$150</h5>            
        </div>   
      </div>
    </section>
  )
}

export default Payment;
