'use client';

import React, { useState } from 'react';
import Notification from "./Notification";

export function Home() {
  return (
    <div>
      <h1>SpaceHolder</h1>
    </div>
  );
} 

function App() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleShowNotification = () => {
    setNotificationMessage(' Hello, this is a notification for The Forgotten Shelf! ');
    setShowNotification(true);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div className="p-6">
      <button onClick={handleShowNotification}>Show Notification</button>
      <Notification show={showNotification} message={notificationMessage} onClose={handleCloseNotification} />
    </div>
  );
}

export default App;


/*
 /import Image from "next/image";

export function Home() {
  return (
    <div>
      <h1>SpaceHolder</h1>
    </div>
  );
} 
import Notification from "./Notification";

function App() {
  return (
    <div className="p-6">
      <Notification />
    </div>
  );
}

export default App;
*/