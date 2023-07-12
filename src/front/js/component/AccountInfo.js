import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const AccountInfo = () => {
  const { store, actions } = useContext(Context);
  console.log(store.transfers);
  useEffect(() => {
    actions.getTransfers();
  }, []);

  return (
    <div className="">
      <div
        className="account-info"
        style={{
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          width: "500px",
          display: "grid",
          gridTemplateRows: "auto 1fr", // Ajusta la distribución de las filas según tus necesidades
        }}
      >
        {/* <h2 style={{ color: "#333", marginBottom: "10px" }}>Card Info</h2> */}
        <p style={{ color: "#333", marginBottom: "5px" }}>
          {/* Balance: ${accountInfo.balance} */}
        </p>
        <p style={{ color: "#333", marginBottom: "5px" }}>
          {/* Total Transactions: {accountInfo.transactions} */}
        </p>
        <h2 style={{ color: "#333", marginBottom: "10px", marginTop: "20px" }}>Transactions</h2>
        <ul
          style={{
            overflowY: "auto",
            maxHeight: "100%", // Ajusta la altura máxima según tus necesidades
            margin: 0,
            padding: 0,
            listStyle: "none",
          }}
        >
          {store.transfers &&
            store.transfers.sent_transfers &&
            store.transfers.sent_transfers.map((transaction) => (
              <li
                key={transaction.id}
                style={{
                  marginBottom: "10px", // Ajusta el margen entre las transacciones según tus necesidades
                }}
              >
                <p>Receiver IBAN: {transaction.receiver_iban}</p>
                <p>Amount: {transaction.amount}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default AccountInfo;
