import React from "react";

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img
        src={require(`../../assets/Mom-Website.jpg`)}
        alt="mom"
        style={{ maxWidth: "450px", height: "500px" }}
      ></img>
      <p>
        Patricia was born and raised in Saint Louis. She often writes and enjoys
        spending time with her dog and family.
      </p>
    </div>
  );
}
