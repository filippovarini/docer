import React, { Component } from "react";
import "./Scroller.css";
import image from "../icons.png";

export class Scroller extends Component {
  render() {
    return (
      <div id="scroller" style={{ backgroundImage: `url(${this.props.url})` }}>
        <p id="scroller-header">{this.props.header}</p>
        <div id="icons-container">
          <i
            onClick={() => this.props.saveChoice(false)}
            className="far fa-thumbs-down choice"
          ></i>
          <i
            onClick={() => this.props.saveChoice(true)}
            className="far fa-thumbs-up choice"
          ></i>
        </div>
        <div id="gradient">
          <div id="body">
            <div id="text-container">
              <p id="title">{this.props.title}</p>
              <p id="description">{this.props.description}</p>
            </div>
            <img id="icons" src={image} alt="icons" />
          </div>
        </div>
      </div>
    );
  }
}

export default Scroller;
