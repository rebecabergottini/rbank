import React, { useContext } from "react";
import { Context } from "../store/appContext";
import visaImage from "../../img/visa.png";
import simImage from "../../img/sim.png";

const CustomerInfo = () => {
  const { store, actions } = useContext(Context);
  console.log(store.user);

  return (
    <div className="col-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div
        className="customer-info"
        style={{
          backgroundColor: "#FFF",
          padding: "20px",
          borderRadius: "8px",
          background: "linear-gradient(to right, #00f6ff, #0f507b69)",
          color: "#ffff",
          height: "218px",
          width: "700px",
          position: "relative",
          top: "0"
        }}
      >
        <div>
          <h2 style={{ marginBottom: "10px", color: "#ffffff" }}>Debit</h2>
          <img src={simImage} alt="SIM" style={{ position: "absolute", left: "-30px", top: "7px", width: "153px" }} />
          <br/>
          <br/>
          <p>
            <strong  style={{ fontSize: "23px"}}></strong> {store.user?.iban}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <strong style={{ fontSize: "19px", marginBottom: "-70px" }}>{store.user?.full_name}</strong>
            <p className="date" style={{ fontSize: "16px", marginBottom:"-67px" }}>03/29</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
