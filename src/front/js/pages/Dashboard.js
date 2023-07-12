import React from "react";
import AccountInfo from "../component/AccountInfo.js";
import CustomerInfo from "../component/CustomerInfo.js";
import NavbarDash from "../component/NavbarDash.js";

const Dashboard = () => {
  return (
    <div className="bg-dark" style={{ display: "flex", flexDirection: "column", margin:"0" ,padding:"0"}}>
      <NavbarDash />
      <h1 className="text-white text-center">
        Welcome to your bank account
      </h1>
      <div className="dashboard d-flex flex-grow-1" style={{ marginTop: "2rem" }}>
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <CustomerInfo />
          </div>
        </div>
        <div className="row flex-grow-1">
          <div className="col-sm-12 d-flex justify-content-center align-items-center">
            <AccountInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
