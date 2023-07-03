import React from "react";

const Stats = () => {
  return (
    <section className="d-flex justify-content-center align-items-center flex-row flex-wrap mb-6">
      <div className="flex-1 d-flex justify-content-center align-items-center flex-row m-3">
        <h4 className="font-weight-bold h1 mb-0">3800+</h4>
        <p className="font-poppins font-weight-normal fs-sm-5 fs-4 lh-lg text-gradient text-uppercase flex-fill px-3 m-0">
          USER ACTIVE
        </p>
      </div>
      <div className="flex-1 d-flex justify-content-center align-items-center flex-row m-3">
        <h4 className="font-weight-bold h1 mb-0">230+</h4>
        <p className="font-poppins font-weight-normal fs-sm-5 fs-4 lh-lg text-gradient text-uppercase flex-fill px-3 m-0">
          TRUSTED BY COMPANY
        </p>
      </div>
      <div className="flex-1 d-flex justify-content-center align-items-center flex-row m-3">
        <h4 className="font-weight-bold h1 mb-0">€230M+</h4>
        <p className="font-poppins font-weight-normal fs-sm-5 fs-4 lh-lg text-gradient text-uppercase flex-fill px-3 m-0">
          TRANSACTION
        </p>
      </div>
    </section>
  );
};

export default Stats;
