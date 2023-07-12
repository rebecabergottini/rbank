import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

const TransferForm = () => {
  const [iban, setIban] = useState("");
  const [amount, setAmount] = useState("");
  const { actions } = useContext(Context);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar los campos del formulario
    if (iban === "" || amount === "") {
      alert("Please fill in all fields");
      return;
    }
    // Llamar a la función transfer de la tienda Flux
    const success = await actions.transfers(iban, amount);

    if (success) {
      // Realizar acciones adicionales en caso de éxito, como mostrar un mensaje o actualizar la lista de transferencias realizadas
      console.log("Transfer successful");
    } else {
      // Realizar acciones adicionales en caso de error, como mostrar un mensaje de error
      console.log("Transfer failed");
    }
    // Restablecer los campos del formulario
    setIban("");
    setAmount("");
    navigate("/dashboard");
  };

  return (
    <div className="bg-dark d-flex justify-content-center align-items-center transferform-container">
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
          <button type="submit" className="btn btn-primary">
            Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
