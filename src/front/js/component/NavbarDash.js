import React from "react";

const NavbarDash = () => {
  const handleTransfer = () => {
    // Logic to handle transfer action
    console.log("Transfer money");
  };

  const handleLogout = () => {
    // Logic to handle logout action
    console.log("Logout");
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
                Accounts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/transfers">
                Transfers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/payments">
                Payments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/settings">
                Settings
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
