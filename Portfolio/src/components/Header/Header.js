import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="container">
      <div className="firstHeader">
        <img src="me3.jpg" alt="ciao" className="image" />
        <h1>federico franciosi</h1>
      </div>
      <div className="secondHeader">
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/Contact">Contact</a>
      </div>
    </header>
  );
}

export default Header;
