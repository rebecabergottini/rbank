import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

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
    <div className="d-flex justify-content-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#">
              {/* <img src="src/front/assets/logo.svg" alt="hoobank" className="logo" /> */}
            </a>
          </div>
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
          <div className="collapse navbar-collapse" id="navbarNav">
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
                  className="nav-link"
                  onClick={handleLogout}
                  style={{
                    color: "#FFF",
                    lineHeight: "130%",
                    width: "87px",
                    height: "33px",
                    borderRadius: "10px",
                    background: "linear-gradient(to right, #8CFBFF, #0FA0FF)",
                    padding: "2px",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarDash;
