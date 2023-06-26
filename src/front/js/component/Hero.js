import React from "react";
import GetStarted from "./GetStarted";
import Button from 'react-bootstrap/Button';

const Hero = () => {
  return (
    <section id="home" className="d-flex flex-md-row flex-column py-6">
      <div className="flex-1 d-flex flex-column xl-px-0 sm-px-16 px-6">
        <div className="d-flex flex-row align-items-center py-2 px-4 bg-discount-gradient rounded-3 mb-2">
          {/* <img src="src/front/assets/Discount.png" alt="discount" className="me-2" style={{ width: '32px', height: '32px' }} /> */}
          <p className="font-poppins font-normal text-white-50 text-sm mb-0" style={{ color: '#FFF', fontSize: '18px', fontFamily: 'Poppins', lineHeight: '150%' }}>
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center w-100" style={{ display: 'flex', width: '670px', flexDirection: 'column', flexShrink: 0 }}>
          <h1 className="flex-1 font-poppins font-weight-bold text-white mb-0" style={{ fontSize: '72px', lineHeight: '140%', letterSpacing: '0.72px' }}>
            The Next <br className="d-sm-none" />
            <span className="text-gradient">Generation</span>
            <br />
          </h1>
          <h1 className="flex-1 font-poppins font-weight-bold text-white mb-0" style={{ fontSize: '72px', lineHeight: '140%', letterSpacing: '0.72px' }}>Payment Method.</h1>
          
          <div className="d-none d-md-block">
            <Button variant="primary">Get Started</Button>
          </div>
        </div>

        <p className="font-poppins font-normal text-white-50 text-sm max-w-100 mt-2" style={{ color: '#FFF', fontSize: '18px', fontFamily: 'Poppins', lineHeight: '150%' }}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine
          annual percentage rates, annual fees.
        </p>
      </div>

      <div className="flex-1 d-flex justify-content-center align-items-center my-0 my-md-5 relative">
        {/* <img src="src/front/assets/robot-hand-background-presenting-technology-gesture 1 (1).png" alt="billing" /> */}

        {/* gradient start */}
        <div className="position-absolute z-index-0 w-40 h-35 top-0 pink__gradient" />
        <div className="position-absolute z-index-1 w-80 h-80 rounded-circle white__gradient bottom-40" />
        <div className="position-absolute z-index-0 w-50 h-50 end-0 bottom-0 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className="d-none d-md-block">
        <Button variant="primary">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;