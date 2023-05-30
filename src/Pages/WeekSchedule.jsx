import React, { useState } from 'react';
import moment from 'moment-timezone';

const WeeklySchedule = () => {
  const [startDate, setStartDate] = useState(moment().startOf('week')); // Start date of the current week
  const [timezone, setTimezone] = useState('UTC'); // Default timezone
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hoursOfDay = Array.from({ length: 16 }, (_, i) => i + 8); // Hours from 8AM to 11PM

  const handlePreviousWeek = () => {
    setStartDate(startDate.clone().subtract(7, 'days'));
  };

  const handleNextWeek = () => {
    setStartDate(startDate.clone().add(7, 'days'));
  };

  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  const renderSchedule = () => {
    return daysOfWeek.map((day) => (
      <div key={day} className="day-column">
        <h5>{day}</h5>
        {hoursOfDay.map((hour) => (
          <div key={hour} className="time-slot">
            <input type="checkbox" className="checkbox" />
            <span className="time">
              {moment(startDate).add(hour, 'hours').format('hA')}
            </span>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="weekly-schedule">
      <h2>Weekly Schedule</h2>
      <div className="navigation">
        <button className="btn" onClick={handlePreviousWeek}>
          Previous Week
        </button>
        <h3 className="date">Date: {startDate.format('MMMM Do, YYYY')}</h3>
        <button className="btn" onClick={handleNextWeek}>
          Next Week
        </button>
      </div>
      <div className="timezone-select">
       <h3>  <label>Timezone:</label>  </h3>
        <select value={timezone} onChange={handleTimezoneChange}>
          <option onChange={handleTimezoneChange} value="UTC">UTC</option>
          <option onChange={handleTimezoneChange} value="America/New_York">America/New_York</option>
        </select>
      </div>
      <div className="schedule">
        <h3>Schedule:</h3>
        {renderSchedule()}
      </div>
    </div>
  );
};

export default WeeklySchedule;