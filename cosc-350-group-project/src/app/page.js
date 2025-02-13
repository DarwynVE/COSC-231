import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="Home">
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

      <div>
        <button className="button">Create Account</button>
        <button className="button">Log In</button>
      </div>
    </div>
  );
}
