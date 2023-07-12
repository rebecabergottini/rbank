import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";

const NavbarDash = () => {
  const { actions } = useContext(Context);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    localStorage.removeItem("myToken");
    navigate("/");
  };

  const navItemStyles = {
    color: "#FFF",
    fontSize: "16px",
    fontFamily: "Poppins",
    lineHeight: "130%",
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="hoobank" className="logo" style={{ width: "200px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={`nav-item ${active === "Transfers" ? "active" : ""}`}
              onClick={() => setActive("Transfers")}
            >
              <a className="nav-link" href="/transfers" style={navItemStyles}>
                Transfer
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-primary custom-logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDash;
