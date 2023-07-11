import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const CustomerInfo = () => {
  const { store, actions } = useContext(Context);
  console.log(store.user);

  return (
    <div className="col-6">
      <div
        className="customer-info"
        style={{
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "8px",
          background: "linear-gradient(to right, #00f6ff, #0f507b69)",
          color: "#ffff",
          height: "218px",
          width: "417px",
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "20%",
        }}
      >
        <div>
          <h2 style={{ marginBottom: "10px", color: "#ffffff" }}>Debit</h2>
           <p>
              <strong></strong> {store.user?.iban}
            </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <strong style={{ fontSize: "23px",  marginBottom: "-81px" }}>{store.user?.full_name}</strong>
            <p className="date" style={{ fontSize: "16px", marginBottom:"-77px" }}>03/29</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
