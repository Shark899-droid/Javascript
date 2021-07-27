import React from "react";
import "./Body.css";

function Body() {
  const sectionRight = "Javascript";

  return (
    <section>
      <div className="containerBody">
        <div className="firstSectionBody">
          <h2>My skills</h2>
          <div className="iconContainer">
            <img src="html.svg" alt=""></img>
            <img src="css3.svg" alt=""></img>
            <img src="javascript.svg" alt=""></img>
          </div>
        </div>
        <div className="secondSectionBody">
          <h1>{sectionRight}</h1>
        </div>
      </div>
    </section>
  );
}

export default Body;
