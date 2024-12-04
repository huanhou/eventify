import React, { useState } from "react";

const TicketModal = ({ isOpen, onClose, event, user, onConfirm }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [addToCalendar, setAddToCalendar] = useState(false);

  const handlePurchase = () => {
    if (ticketCount < 1) {
      alert("Please select at least one ticket.");
      return;
    }

    const bookingData = {
      id: event.id, // Ensure this matches the `Events` array
      userId: user.id,
      name: event.name,
      date: event.date,
      location: event.location,
      image: event.image, // Ensure image is included
      organizer: event.organizer,
      tickets: ticketCount,
      addToCalendar: addToCalendar,
    };

    const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];

    // Check if already booked
    const isAlreadyBooked = bookedEvents.some(
      (booking) => booking.userId === user.id && booking.id === event.id
    );

    if (!isAlreadyBooked) {
      bookedEvents.push(bookingData);
      localStorage.setItem("bookedEvents", JSON.stringify(bookedEvents));
      onConfirm(bookingData); // Pass data to parent
      alert("Booking confirmed!");
      onClose();
    } else {
      alert("You have already booked this event.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ticket-modal-overlay">
      <div className="ticket-modal">
        <h2>Book Tickets for {event.name}</h2>
        <label htmlFor="ticketCount">Number of Tickets:</label>
        <input
          type="number"
          id="ticketCount"
          min="1"
          value={ticketCount}
          onChange={(e) => setTicketCount(Number(e.target.value))}
        />
        <label>
          <input
            type="checkbox"
            checked={addToCalendar}
            onChange={(e) => setAddToCalendar(e.target.checked)}
          />
          Add to Calendar
        </label>
        <div>
          <button className="modal-confirm-button" onClick={handlePurchase}>
            Confirm Booking
          </button>
          <button className="modal-cancel-butto" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
