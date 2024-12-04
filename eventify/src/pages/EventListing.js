import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import eventsData from "../data/Events";
import { useUser } from "../context/UserContext"; // Import useUser

const EventListing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser(); // Access user context
  const queryParams = new URLSearchParams(location.search); // Initialize query params
  const initialCategory = queryParams.get("category") || "";

  const [filters, setFilters] = useState({
    searchQuery: "",
    selectedCategory: initialCategory,
    selectedDate: "",
    selectedLocation: "",
    isFree: false,
  });

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [events, setEvents] = useState([]); // Added state for user-specific events
  const eventsPerPage = 8;

  // Load and filter user-specific booked events
  useEffect(() => {
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
    const userBookings = bookedEvents.filter(
      (event) => event.userId === user?.id // Ensure user is defined
    );
    setEvents(userBookings);
  }, [user]);

  // Apply filters whenever filters change
  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const applyFilters = () => {
    const filtered = eventsData.filter((event) => {
      const matchesSearch = filters.searchQuery
        ? event.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
        : true;
      const matchesCategory = filters.selectedCategory
        ? event.category === filters.selectedCategory
        : true;
      const matchesDate = filters.selectedDate
        ? event.date === filters.selectedDate
        : true;
      const matchesLocation = filters.selectedLocation
        ? event.location === filters.selectedLocation
        : true;
      const matchesPrice = filters.isFree ? event.isFree : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDate &&
        matchesLocation &&
        matchesPrice
      );
    });

    setFilteredEvents(filtered);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      searchQuery: "",
      selectedCategory: "",
      selectedDate: "",
      selectedLocation: "",
      isFree: false,
    });
    setFilteredEvents(eventsData);
    setCurrentPage(1);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="custom-events-layout">
      <div className="custom-filters-wrapper">
        <h3>Filters</h3>
        <input
          type="text"
          name="searchQuery"
          value={filters.searchQuery}
          onChange={handleFilterChange}
          placeholder="Search events..."
          className="custom-filter-input"
        />
        <select
          name="selectedCategory"
          value={filters.selectedCategory}
          onChange={handleFilterChange}
          className="custom-filter-select"
        >
          <option value="">All Categories</option>
          {[
            "Music",
            "Tech",
            "Art",
            "Food",
            "Business",
            "Books",
            "Education",
          ].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="selectedDate"
          value={filters.selectedDate}
          onChange={handleFilterChange}
          className="custom-filter-date"
        />
        <select
          name="selectedLocation"
          value={filters.selectedLocation}
          onChange={handleFilterChange}
          className="custom-filter-select"
        >
          <option value="">All Locations</option>
          {[...new Set(eventsData.map((event) => event.location))].map(
            (location) => (
              <option key={location} value={location}>
                {location}
              </option>
            )
          )}
        </select>

        <div className="custom-filter-buttons">
          <button onClick={applyFilters} className="custom-filter-apply">
            Apply Filters
          </button>
          <button onClick={resetFilters} className="custom-filter-reset">
            Reset Filters
          </button>
        </div>
      </div>
      <div className="custom-events-container">
        {currentEvents.length > 0 ? (
          currentEvents.map((event) => (
            <div key={event.id} className="custom-event-card">
              {/* Left Side: Image */}
              <div className="custom-event-image-wrapper">
                <img
                  src={event.image}
                  alt={event.name}
                  className="custom-event-image"
                />
                <div className="custom-event-tags">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="custom-event-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="custom-event-register"
                  onClick={() => navigate(`/event/${event.id}`)}
                >
                  Register
                </button>
              </div>

              {/* Right Side: Event Details */}
              <div className="custom-event-info">
                <h3 className="custom-event-title">{event.name}</h3>
                <p className="custom-event-date">
                  <i className="fas fa-calendar-alt"></i>{" "}
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="custom-event-location">
                  <i className="fas fa-map-marker-alt"></i> {event.location}
                </p>
                <p className="custom-event-description">{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="custom-no-events-message">
            No events found matching your criteria.
          </p>
        )}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`pagination-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => {
                setCurrentPage(index + 1);
                window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>{" "}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => {
              setCurrentPage(index + 1);
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventListing;
