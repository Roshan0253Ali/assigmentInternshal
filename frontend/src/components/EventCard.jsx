import React from 'react';

const EventCard = ({ event, onClick }) => (
  <div className="border p-4 rounded shadow">
  <img src={event.imageUrl} alt="Logo" />
    <h2 className="text-xl font-semibold">{event.title}</h2>
    <p className="text-s font-semibold my-3">{event.date}</p>
    <p className="text-s font-semibold my-3">{event.location}</p>
    <p className="text-s font-semibold my-3">{event.description}</p>
    <button onClick={() => onClick(event)}
      className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">GET TICKETS</button>
  </div>
);

export default EventCard;