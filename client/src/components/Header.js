import React, { Component } from "react";
import logo from "../logo.png";
import "./Components.css";

export class Header extends Component {
  render() {
    return (
      <div id="header">
        <img id="logo" src={logo} />
      </div>
    );
  }
}

export default Header;
