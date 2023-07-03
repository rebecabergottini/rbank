import React from 'react';
import { BiSearch } from 'react-icons/bi';

const NavBarDashboard = () => {
  return (
    <nav>
      <div className="title">
        <h1>Dashboard</h1>
        <h5>Payment updates</h5>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
}

export default NavBarDashboard;
