import React from "react";
import { BsCalendar3 } from "react-icons/bs";

const Calendar = () => (
  <div className="container mt-4 text-center">
    <h2>📅 Calendar</h2>
    <BsCalendar3 size={48} className="text-primary my-3" />
    <p>Manage your events and dates here.</p>
  </div>
);

export default Calendar;
