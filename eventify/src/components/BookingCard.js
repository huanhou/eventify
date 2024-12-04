import React from "react";

const BookingCard = ({ event, onCancelBooking, onAddFeedback }) => {
  return (
    <div className="booking-card">
      {/* Left Section: Image and Buttons */}
      <div className="booking-card-left">
        <div className="booking-card-image">
          <img src={event.image} alt={event.name} />
        </div>
        <div className="booking-card-buttons">
          <button className="cancel-booking-button" onClick={onCancelBooking}>
            Cancel Booking
          </button>
          <button
            className="edit-feedback-button"
            onClick={() => onAddFeedback(event.id)}
          >
            Add/Edit Feedback
          </button>
        </div>
      </div>

      {/* Right Section: Event Details and Feedback */}
      <div className="booking-card-info">
        <h3>{event.name}</h3>
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
        <p>
          <strong>Organizer:</strong> {event.organizer}
        </p>
        {event.feedback ? (
          <div className="booking-card-feedback">
            <h4>Your Feedback</h4>
            <p>
              <strong>Comment:</strong> {event.feedback.comment}
            </p>
            <p>
              <strong>Rating:</strong> {event.feedback.rating} stars
            </p>
          </div>
        ) : (
          <p className="no-feedback-message">No feedback provided yet.</p>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
