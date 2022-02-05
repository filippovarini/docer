import React, { Component } from "react";
import Scroller from "./components/Scroller";
import images from "./images";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div id="app">
        docer
        {images.map((image, i) => (
          <Scroller
            key={i}
            url={image.url}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    );
  }
}

export default App;
