import React from "react";

const TransactionHistory = () => {
  const transactions = [
    { id: 1, date: "2023-06-30", description: "Purchase", amount: -100 },
    { id: 2, date: "2023-06-29", description: "Deposit", amount: 500 },
    { id: 3, date: "2023-06-28", description: "Withdrawal", amount: -200 },
  ];

  return (
    <div className="col-6">
      <div
        className="transaction-history"
        style={{
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          color: "#000",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Transaction History</h2>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.date}</span>
              <span>{transaction.description}</span>
              <span>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionHistory;
