import React from 'react';

const EmailModal = ({ event, email, setEmail, onSubmit, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded">
      <h2 className="text-xl mb-2">Enter your email for {event.title}</h2>
      <input
        type="email"
        className="border p-2 w-full mb-4"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={onSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Continue</button>
      <button onClick={onClose} className="ml-2 px-4 py-2">Cancel</button>
    </div>
  </div>
);

export default EmailModal;
