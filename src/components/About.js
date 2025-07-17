import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>This is my profile and i hope it works. if you are seeing this, then i guess it does work</p>
    <img src={image} alt="I made this" />
  </div>
  )
}

export default About;
