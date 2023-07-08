import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const NavbarDash = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    localStorage.removeItem("myToken");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/accounts">
                Cuentas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transfers">
                Transferencias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payments">
                Pagos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                Configuración
              </a>
            </li>
            <li className="nav-item">
            <button className="btn btn-secondary" onClick={handleLogout}>
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
