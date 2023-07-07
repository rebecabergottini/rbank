import React from "react";

const CustomerInfo = () => {
  const customerData = {
    fullName: "John Doe",
    cardNumber: "**** **** **** 1234",
    cardType: "Visa",
  };

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
          <strong>Full Name:</strong> {customerData.fullName}
        </p>
        <p>
          <strong>Card Number:</strong> {customerData.cardNumber}
        </p>
        <p>
          <strong>Card Type:</strong> {customerData.cardType}
        </p>
      </div>
    </div>
  );
};

export default CustomerInfo;
