import React, { useState } from "react";
import Filters from "./Filters";
import EventList from "./EventList";
import eventsData from "./data/events";

const EventsPage = () => {
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleFilter = (filters) => {
    // Apply filter logic based on the filters object
    const filtered = eventsData.filter((event) => {
      return (
        (!filters.date || event.date === filters.date) &&
        (!filters.price || event.price === filters.price) &&
        (!filters.format || event.format.includes(filters.format))
      );
    });
    setFilteredEvents(filtered);
  };

  return (
    <div className="events-page">
      <Filters onFilterChange={handleFilter} />
      <EventList events={filteredEvents} />
    </div>
  );
};

export default EventsPage;
