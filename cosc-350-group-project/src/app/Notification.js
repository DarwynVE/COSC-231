// Import necessary CSS for styling the notification
// Import React, necessary for creating React components
import React from 'react';
import './Notification.css';

// Define a functional component named 'Notification' which takes 'show', 'message', and 'onClose' as props
const Notification = ({ show, message, onClose }) => {
  // If 'show' prop is false, don't render anything (return null)
  if (!show) return null;

  return (
    // JSX to render the notification if 'show' is true
    //Display the message passed as a prop //
    // Button to close the notification, calls 'onClose' function when clicked//
    <div className="Notification"> 
      <span>{message}</span>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
  );
};

// Export the component so it can be used in other parts of the application
export default Notification;