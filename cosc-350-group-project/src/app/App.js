// Import React and useState hook
import React, { useState } from 'react';
// Import the Notification component
import Notification from './Notification';
// Import CSS for styling
import './App.css';

// Define the main App component
function App() {
  // useState hooks to manage state for showing/hiding notification and its message
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // Function to show the notification
  const handleShowNotification = () => {
    // Set the message for the notification
    setNotificationMessage('Hello, this is a notification!');
    // Set showNotification to true to display the notification
    setShowNotification(true);
  };

  // Function to hide the notification
  const handleCloseNotification = () => {
    // Set showNotification to false to hide the notification
    setShowNotification(false);
  };

  return (
    // Main container for the application
    <div className="App">
      // Button to trigger the notification display
      <button onClick={handleShowNotification}>Show Notification</button>
      // Render Notification component with current state values
      <Notification 
        show={showNotification} 
        message={notificationMessage} 
        onClose={handleCloseNotification}
      />
    </div>
  );
}

// Export App as the default component
export default App;