import React from 'react';
// This is importing the NavBar component 
import NavBar from '../components/navigationBar/navigationBar';
import './homePage.css';

export default function HomePage() {

    return (
        <div className="mainWrapper">
            <NavBar />
            <header className="homeHeader">
                <h1>The Forgotten Shelf</h1>
            </header>
            <div className="homeSlogan">
                <p> Your goto app for managing the inventory for your hobbies.</p>
            </div>
            <div className="homeDescription">
                <p className="descriptionText">
                    We all know that when it comes to personal hobbies it is hard to keep track of the things you have to work with. You could be a mechanic who needs to keep track of all the car parts you have, someone who loves arts and crafts or a 3D Printing guru who has a ton of different filament types.
                </p>
                <p>
                    The Forgotten Shelf is here to help you keep track of all the things you have so you can focus on what you love to do.
                </p>
            </div>
        </div>
    );
}