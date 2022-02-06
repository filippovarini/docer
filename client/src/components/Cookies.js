import React, { Component } from "react";
import "./Components.css";

export class Cookies extends Component {
  render() {
    return (
      <div id="cookies">
        This fake cookie box is just to say that the purpose of these images is
        just entertaining and not at all commertial. Also we ask for{" "}
        <i style={{ textDecoration: "underline" }}>
          CVs, which we confidentially use for matching students with companies.{" "}
        </i>{" "}
        You can withdraw your consent at any time in your settings.
        <div id="buttons">
          <p className="button">I ACCEPT</p>
          <p className="button">PERSONALIZE MY CHOICES</p>
        </div>
      </div>
    );
  }
}

export default Cookies;
