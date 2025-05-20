import React from 'react';

const EventCard = ({ event, onClick }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-semibold">{event.title}</h2>
    <button onClick={() => onClick(event)}
      className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">GET TICKETS</button>
  </div>
);

export default EventCard;