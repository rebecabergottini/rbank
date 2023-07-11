import React from "react";
import AccountInfo from "../component/AccountInfo.js";
import TransactionHistory from "../component/TransactionHistory.js";
import CustomerInfo from "../component/CustomerInfo.js";
import NavbarDash from "../component/NavbarDash.js";

const Dashboard = () => {
  return (
    <div className="bg-dark wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", margin:"0" ,padding:"0"}}>
      <NavbarDash />
      <h1 className="text-white text-center" style={{ marginTop: "2rem" }}>
        Welcome to your bank account
      </h1>
      <div className="dashboard d-flex flex-column flex-grow-1">
        <div className="row flex-grow-1">
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
