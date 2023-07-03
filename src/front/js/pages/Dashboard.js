import React from 'react';
import NavBarDashboard from "../component/NavBarDashboard";
import Balance from "../component/Balance"
import History from "../component/History"

const Dashboard = () => {
  return (
    <section className='section-dashboard'>
      <NavBarDashboard />
      <Balance />
      <History />
    </section>
  );
}

export default Dashboard;