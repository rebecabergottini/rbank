import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

const CustomerInfo = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getUserData();
  }, []);

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
        {store.userData ? (
          <>
            <p>
              <strong>Full Name:</strong> {store.userData.full_name}
            </p>
            <p>
              <strong>DNI:</strong> {store.userData.dni}
            </p>
            <p>
              <strong>Email:</strong> {store.userData.email}
            </p>
          </>
        ) : (
          <p>Loading customer information...</p>
        )}
      </div>
    </div>
  );
};

export default CustomerInfo;
