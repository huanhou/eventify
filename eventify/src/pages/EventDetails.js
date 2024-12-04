import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import events from "../data/Events";
import TicketModal from "../components/TicketModal";
import { useUser } from "../context/UserContext";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const event = events.find((event) => event.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!event) {
    return <p>Event not found!</p>;
  }

  const handleBuyTicket = () => {
    setIsModalOpen(true); // Open the modal
  };

  const saveBooking = (bookingData) => {
    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
    localStorage.setItem(
      "bookedEvents",
      JSON.stringify([...bookedEvents, bookingData])
    );
  };

  return (
    <div className="event-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i> Back
      </button>
      <div className="event-banner">
        <img src={event.image} alt={event.name} />
        <button className="buy-tickets-button" onClick={handleBuyTicket}>
          <i className="fas fa-shopping-cart"></i> Buy Ticket
        </button>
        <div className="event-banner-overlay">
          <h1>{event.name}</h1>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
        </div>
      </div>
      <div className="event-info">
        <div className="event-description-section">
          <h2>Description</h2>
          <div class="container">
            <div class="section">
              <h2>Event Summary</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Iaculis et turpis sit
                tortor. Tincidunt ultrices bibendum tellus eget amet odio nisi
                tristique. Amet risus ut tincidunt ut in odio scelerisque
                congue. Commodo convallis risus odio ipsum volutpat cum quis
                quis. Felis elementum urna fermentum ullamcorper lacinia in.
                Donec sit sit egestas varius et habitant. Malesuada enim lectus
                ac pharetra adipiscing. Adipiscing neque mauris amet donec et.
                Imperdiet quis id id ac in in mauris.
              </p>
            </div>
            <div class="section">
              <h2>About Event</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Iaculis et turpis sit
                tortor. Tincidunt ultrices bibendum tellus eget amet odio nisi
                tristique. Amet risus ut tincidunt ut in odio scelerisque
                congue. Commodo convallis risus odio ipsum volutpat cum quis
                quis. Felis elementum urna fermentum ullamcorper lacinia in.
                Donec sit sit egestas varius et habitant. Malesuada enim lectus
                ac pharetra adipiscing. Adipiscing neque mauris amet donec et.
                Imperdiet quis id id ac in in mauris.
              </p>
            </div>
            <div class="section">
              <h2>What We Do</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Iaculis et turpis sit
                tortor. Tincidunt ultrices bibendum tellus eget amet odio nisi
                tristique. Amet risus ut tincidunt ut in odio scelerisque
                congue. Commodo convallis risus odio ipsum volutpat cum quis
                quis. Felis elementum urna fermentum ullamcorper lacinia in.
                Donec sit sit egestas varius et habitant. Malesuada enim lectus
                ac pharetra adipiscing. Adipiscing neque mauris amet donec et.
                Imperdiet quis id id ac in in mauris.
              </p>
            </div>
            <div class="section">
              <h2>How Can You Support Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Iaculis et turpis sit
                tortor. Tincidunt ultrices bibendum tellus eget amet odio nisi
                tristique. Amet risus ut tincidunt ut in odio scelerisque
                congue. Commodo convallis risus odio ipsum volutpat cum quis
                quis. Felis elementum urna fermentum ullamcorper lacinia in.
                Donec sit sit egestas varius et habitant. Malesuada enim lectus
                ac pharetra adipiscing. Adipiscing neque mauris amet donec et.
                Imperdiet quis id id ac in in mauris.
              </p>
            </div>
          </div>
        </div>
        <h2>Organizer</h2>
        <p>{event.organizer}</p>
        <h2>Tags</h2>
        <div className="event-tags">
          {event.tags.map((tag) => (
            <span key={tag} className="event-tag">
              {tag}
            </span>
          ))}
        </div>
        <h2>Attendees</h2>
        <p>{event.attendees} people attending</p>
      </div>
      <iframe
        title="event-map"
        className="event-map"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          event.location
        )}&output=embed`}
      ></iframe>
      <h2>More Events You May Like</h2>
      <div className="related-events-container">
        {events
          .filter(
            (relatedEvent) =>
              (relatedEvent.category === event.category ||
                relatedEvent.location === event.location) &&
              relatedEvent.id !== event.id
          )
          .map((relatedEvent) => (
            <div key={relatedEvent.id} className="related-event-card">
              <img src={event.image} alt={relatedEvent.name} />
              <div className="related-event-info">
                <h3>{relatedEvent.name}</h3>
                <p>{new Date(relatedEvent.date).toLocaleDateString()}</p>
                <p>{relatedEvent.location}</p>
                <button
                  className="learn-more-button"
                  onClick={() => navigate(`/event/${relatedEvent.id}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
      </div>
      <TicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        event={event}
        user={user}
        onConfirm={(bookingData) => {
          alert("Your ticket has been confirmed!");
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default EventDetails;
