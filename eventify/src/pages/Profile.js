import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import EventCard from "../components/BookingCard";
import EventCalendar from "../components/Calendar";
import Settings from "../components/Settings";

const Profile = () => {
  const { user, logout } = useUser();
  const [tab, setTab] = useState("myBookings");
  const [events, setEvents] = useState([]);
  const [profileInfo, setProfileInfo] = useState(user);

  useEffect(() => {
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
    const validEvents = bookedEvents.filter(
      (event) => event.userId === user.id && event.id // Ensure both `userId` and `id` exist
    );
    setEvents(validEvents);
  }, [user]);

  const handleAddFeedback = (eventId) => {
    const feedback = prompt("Enter your feedback comment:");
    const rating = prompt("Rate the event (1-5 stars):");

    // Validate input
    if (!feedback || isNaN(rating) || rating < 1 || rating > 5) {
      alert("Invalid feedback or rating. Please try again.");
      return;
    }

    const updatedEvents = events.map((event) =>
      event.id === eventId
        ? {
            ...event,
            feedback: { comment: feedback, rating: parseInt(rating) },
          }
        : event
    );
    setEvents(updatedEvents);

    // Update localStorage
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
    const updatedBookedEvents = bookedEvents.map((event) =>
      event.id === eventId
        ? {
            ...event,
            feedback: { comment: feedback, rating: parseInt(rating) },
          }
        : event
    );
    localStorage.setItem("bookedEvents", JSON.stringify(updatedBookedEvents));
  };

  const handleEditProfile = (updatedInfo) => {
    setProfileInfo(updatedInfo);
    const updatedUser = { ...user, ...updatedInfo };
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };
  const handleUpdateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
    const updatedBookedEvents = bookedEvents.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    localStorage.setItem("bookedEvents", JSON.stringify(updatedBookedEvents));
  };

  const handleCancelBooking = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
    const updatedBookedEvents = bookedEvents.filter(
      (event) => event.id !== eventId
    );
    localStorage.setItem("bookedEvents", JSON.stringify(updatedBookedEvents));
  };

  const renderTabContent = () => {
    switch (tab) {
      case "myBookings":
        return events.length > 0 ? (
          <div className="event-list">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onCancelBooking={() => handleCancelBooking(event.id)}
                onAddFeedback={() => handleAddFeedback(event.id)}
              />
            ))}
          </div>
        ) : (
          <p>No bookings yet!</p>
        );
      case "myCalendar":
        const calendarEvents = events.filter((event) => event.addToCalendar);
        return <EventCalendar events={calendarEvents} />;
      case "settings":
        return (
          <Settings profileInfo={profileInfo} onEdit={handleEditProfile} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <img
          src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-details">
          <h2>{user.name}</h2>
          <p>Date of Birth: {user.dob || "N/A"}</p>
          <p>Email: {user.email}</p>
          <p>Mobile: {user.mobile || "N/A"}</p>
          <p>Hobbies: {user.hobbies?.join(", ") || "N/A"}</p>
        </div>
      </header>
      <nav className="profile-tabs">
        <button onClick={() => setTab("myBookings")}>My Bookings</button>
        <button onClick={() => setTab("myCalendar")}>My Calendar</button>
        <button onClick={() => setTab("settings")}>Settings</button>
      </nav>
      <div className="profile-content">{renderTabContent()}</div>
    </div>
  );
};

export default Profile;
