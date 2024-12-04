// src/components/management.jsx
import React from 'react';

// Management component to display messages for the user.
const Management = ({ message }) => {
  return (
    <div className="management-container">
      <p className="pic">{message.message1}</p>
      <p className="message">{message.message2}</p>
      <p className="message">{message.message3}</p>
    </div>
  );
}

export default Management;
