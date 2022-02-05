import React, { Component } from "react";
import "./Scroller.css";
import image from "../icons.png";

export class Scroller extends Component {
  mouseDown = e => {
    console.log(e.target);
  };

  mouseOut = e => {
    console.log(e.target);
  };

  render() {
    return (
      <div
        id="scroller"
        style={{ backgroundImage: `url(${this.props.url})` }}
        onMouseDown={this.mouseDown}
        onMouseOut={this.onMouseOut}
        onDrag={this.scroll}
      >
        <div id="body">
          <div id="text-container">
            <p id="title">{this.props.title}</p>
            <p id="description">{this.props.description}</p>
          </div>
          <img id="icons" src={image} alt="icons" />
        </div>
      </div>
    );
  }
}

export default Scroller;
