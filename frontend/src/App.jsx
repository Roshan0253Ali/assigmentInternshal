import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from './components/EventCard';
import EmailModal from './components/EmailModal';

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('https://assigmentinternshal-5.onrender.com/api/events')
      .then(res => setEvents(res.data));
  }, []);

  const handleGetTickets = async () => {
    if (!email || !selectedEvent) return;
    await axios.post('https://assigmentinternshal-5.onrender.com/api/subscribe', {
      email,
      eventId: selectedEvent._id,
    });
    alert("succesfuly booked your ticket")
    // window.open(selectedEvent.link, '_blank');
    setSelectedEvent(null);
  setEmail('');
    
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Sydney Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map(event => (
          <EventCard key={event._id} event={event} onClick={setSelectedEvent} />
        ))}
      </div>
      {selectedEvent && (
        <EmailModal
          event={selectedEvent}
          email={email}
          setEmail={setEmail}
          onSubmit={handleGetTickets}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
}

export default App;
