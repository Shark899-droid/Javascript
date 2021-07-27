import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="container-footer">
      <div className="container-icons">
        <img src="facebook.svg" alt="" style={{ marginRight: "1rem" }} />
        <img src="mail.svg" alt="" />
      </div>
      <h4>Federico Franciosi</h4>
    </footer>
  );
}

export default Footer;
