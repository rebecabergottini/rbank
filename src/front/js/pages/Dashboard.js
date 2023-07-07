import React from "react";
import AccountSummary from "../component/AccountSummary.js";
import TransferForm from "../component/TransferForm.js";
import TransactionHistory from "../component/TransactionHistory.js";
import CustomerInfo from "../component/CustomerInfo.js";
import NavbarDash from "../component/NavBarDash.js";

const Dashboard = () => {
  return (
    <div className="wrapper">
      <NavbarDash />
      <h1>Welcome to Your Bank Account</h1>
      <div className="dashboard-grid">
        <div className="row">
          <AccountSummary />
          <CustomerInfo />
        </div>
        <div className="dashboard-item">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
