import React from "react";

const AccountSummary = () => {
  const accountInfo = {
    balance: 2500,
    transactions: 10,
    lastTransaction: "2023-07-01",
  };

  return (
    <div className="col-6">
      <div
        className="account-summary"
        style={{
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#333", marginBottom: "10px" }}>Account Summary</h2>
        <p style={{ color: "#333", marginBottom: "5px" }}>
          Balance: ${accountInfo.balance}
        </p>
        <p style={{ color: "#333", marginBottom: "5px" }}>
          Total Transactions: {accountInfo.transactions}
        </p>
        <p style={{ color: "#333", marginBottom: "0" }}>
          Last Transaction: {accountInfo.lastTransaction}
        </p>
      </div>
    </div>
  );
};

export default AccountSummary;
