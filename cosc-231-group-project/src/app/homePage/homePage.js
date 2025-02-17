import React from 'react';
// This is importing the NavBar component 
import NavBar from '../components/navigationBar/navigationBar';

export default function HomePage() {
    
      return (
        <div className="mainWrapper">
            <NavBar />
            <header className="Home-header">
                <h1>The Forgotten Shelf</h1>
            </header>

            <div className="image-container">
                <img
                    src="https://via.placeholder.com/300"
                    alt="Placeholder"
                    className="App-logo"
                />
            </div>
        </div>
    );
}