import React, { useState } from "react";

const TransferForm = () => {
  const [iban, setIban] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [amount, setAmount] = useState("");
  const [additionalData, setAdditionalData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lógica para enviar los datos del formulario al backend o realizar acciones adicionales

    // Restablecer los campos del formulario después de enviar los datos
    setIban("");
    setBeneficiaryName("");
    setAmount("");
    setAdditionalData("");
  };

  return (
    <div className="transferform-container">
      <div className="transfer-form">
        <h2 className="form-title">Transfer Money</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="iban" className="form-label">
              IBAN
            </label>
            <input
              type="text"
              id="iban"
              className="form-control"
              value={iban}
              onChange={(e) => setIban(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="beneficiaryName" className="form-label">
              Beneficiary Name
            </label>
            <input
              type="text"
              id="beneficiaryName"
              className="form-control"
              value={beneficiaryName}
              onChange={(e) => setBeneficiaryName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="additionalData" className="form-label">
              Additional Data (Subject)
            </label>
            <textarea
              id="additionalData"
              className="form-control"
              value={additionalData}
              onChange={(e) => setAdditionalData(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
