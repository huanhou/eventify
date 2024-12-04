import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import events from "../data/Events";

const categories = ["Music", "Tech", "Art", "Food", "Business", "Books"];

const Home = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/events?category=${category}`);
  };

  const [filter, setFilter] = useState("All"); // Filter for "Recently Popular"
  const [searchQuery, setSearchQuery] = useState(""); // Search input value
  const [selectedCity, setSelectedCity] = useState(""); // Selected city value
  const [filteredSearchEvents, setFilteredSearchEvents] = useState([]); // Search result events

  // Handle the "Search" button click
  const handleSearch = () => {
    const filtered = events.filter((event) => {
      const matchesSearch = searchQuery
        ? event.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesCity = selectedCity ? event.location === selectedCity : true;
      return matchesSearch && matchesCity;
    });

    setFilteredSearchEvents(filtered);
  };

  // Filter logic for "Recently Popular"
  const filteredEvents = events.filter((event) => {
    if (filter === "Today") {
      return new Date(event.date).toDateString() === new Date().toDateString();
    } else if (filter === "Tomorrow") {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return new Date(event.date).toDateString() === tomorrow.toDateString();
    } else if (filter === "Free") {
      return event.isFree;
    }
    return true; // Default for "All"
  });

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src="hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Find the Best Events Near You</h1>
          <p>Search for events by name, location, or category</p>
          <div className="hero-search">
            <input
              type="text"
              placeholder="Search for events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search input
            />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)} // Update selected city
            >
              <option value="">Select a Location</option>
              <option value="New York, USA">New York, USA</option>
              <option value="San Francisco, USA">San Francisco, USA</option>
              <option value="Los Angeles, USA">Los Angeles, USA</option>
              <option value="Chicago, USA">Chicago, USA</option>
              <option value="Austin, USA">Austin, USA</option>
              <option value="Seattle, USA">Seattle, USA</option>
              <option value="Denver, USA">Denver, USA</option>
              <option value="Miami, USA">Miami, USA</option>
              <option value="Las Vegas, USA">Las Vegas, USA</option>
              <option value="Boston, USA">Boston, USA</option>
              <option value="Hollywood, USA">Hollywood, USA</option>
              <option value="Atlanta, USA">Atlanta, USA</option>
              <option value="Portland, USA">Portland, USA</option>
              <option value="Dallas, USA">Dallas, USA</option>
              <option value="Nashville, USA">Nashville, USA</option>
              <option value="New Orleans, USA">New Orleans, USA</option>
              <option value="Houston, USA">Houston, USA</option>
              <option value="Sonoma, USA">Sonoma, USA</option>
              <option value="San Diego, USA">San Diego, USA</option>
              <option value="Philadelphia, USA">Philadelphia, USA</option>
              <option value="Palo Alto, USA">Palo Alto, USA</option>
              <option value="Phoenix, USA">Phoenix, USA</option>
              <option value="Flagstaff, USA">Flagstaff, USA</option>
              <option value="Silicon Valley, USA">Silicon Valley, USA</option>
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>

      {/* Display Filtered Events After Search */}
      {filteredSearchEvents.length > 0 && (
        <section className="filtered-events-section">
          <h2>Search Results</h2>
          <div className="events-container">
            {filteredSearchEvents.map((event) => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.name} />
                <div className="event-details">
                  <h3 className="event-title">{event.name}</h3>
                  <p className="event-date">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <p className="event-attendance">
                    {event.attendees} people are attending this event.
                  </p>
                  {/* Learn More Button */}
                  <div className="event-actions">
                    <a
                      onClick={() => navigate(`/event/${event.id}`)}
                      className="learn-more-button"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="categories-section">
        <h2>Categories</h2>
        <div className="categories-container">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={`/${category.toLowerCase()}.jpg`}
                alt={category}
                onError={(e) => {
                  e.target.src = "/default.jpg"; // Fallback image
                }}
              />
              <p>{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recently Popular Section */}
      <section className="recently-popular-section">
        <h2>Recently Popular</h2>
        <div className="filter-buttons">
          {["All", "Today", "Tomorrow", "Free"].map((item) => (
            <button
              key={item}
              className={`filter-button ${filter === item ? "active" : ""}`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="events-container">
          {filteredEvents.slice(0, 6).map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.name} />
              <div className="event-details">
                <h3 className="event-title">{event.name}</h3>
                <p className="event-date">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <p className="event-attendance">
                  {event.attendees} people are attending this event.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="see-more">
          <Link to="/events" className="see-more-button">
            See More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
