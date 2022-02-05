import React, { Component } from "react";
import "./Components.css";

export class Cookies extends Component {
  render() {
    return (
      <div id="cookies">
        We value your privacy. We and our partners use trackers to measure the
        audience of our website and to provide you with offers and improve our
        own Tinder marketing operations.
        <i style={{ textDecoration: "underline" }}>
          More info on cookies and providers we use.
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
