import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const eventsForDate = events.filter(
    (event) =>
      new Date(event.date).toDateString() ===
      new Date(selectedDate).toDateString()
  );

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const hasEvent = events.some(
              (event) =>
                new Date(event.date).toDateString() === date.toDateString()
            );
            return hasEvent ? <div className="event-indicator"></div> : null;
          }
        }}
      />
      <div className="events-for-date">
        <h3>Events on {selectedDate.toDateString()}</h3>
        {eventsForDate.length > 0 ? (
          eventsForDate.map((event) => (
            <div key={event.id} className="event-item">
              <h4>{event.name}</h4>
              <p>{event.location}</p>
            </div>
          ))
        ) : (
          <p>No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default EventCalendar;
