import React from 'react';
import Notification from './Notification';
import Card from './Card';
import Activity from './Activity';
import Payment from './Payment';

function RightSidebar() {
  return (
    <div className="sidebar">
      <div className="grid-sidebar">
        <Notification />
        <Card />
        <Activity />
        <Payment />
      </div>
    </div>
  )
}

export default RightSidebar;
