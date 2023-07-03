import React from 'react';
import { AiOutlineCalendar, AiOutlineBell, AiOutlineCaretDown } from "react-icons/ai";

function Notification() {
  return (
    <nav className="notification-nav">
      <div className="notification">
        <AiOutlineCalendar className="font_icon" />
        <AiOutlineBell className="font_icon" />
        <div className="image">
          <img src="" alt="Avatar" />
        </div>
        <AiOutlineCaretDown />
      </div>
    </nav>
  );
}

export default Notification;
