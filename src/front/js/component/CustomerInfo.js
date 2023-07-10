import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const CustomerInfo = () => {
  const { store, actions } = useContext(Context);
  console.log(store.user)
  return (
    <div className="col-6">
      <div
        className="customer-info"
        style={{
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          color: "#000",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>Customer Information</h2>
            <p>
              <strong>Full Name:</strong> {store.user?.full_name}
            </p>
            <p>
              <strong>IBAN:</strong> {store.user?.iban}
            </p>
      </div>
    </div>
  );
};

export default CustomerInfo;
