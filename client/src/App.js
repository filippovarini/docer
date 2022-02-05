import React, { Component } from "react";
import Scroller from "./components/Scroller";
import Cookies from "./components/Cookies";
import Header from "./components/Header";
import UploadCV from "./components/UploadCV";
import FormDone from "./components/FormDone";
import images from "./images";
import "./App.css";

export class App extends Component {
  state = {
    index: 4,
    answers: [],
    formDone: false
  };

  swipeLeft = () => {
    this.setState({
      answers: [...this.state.answers, false],
      index: this.state.index + 1
    });
  };

  swipeRight = () => {
    this.setState({
      answers: [...this.state.answers, true],
      index: this.state.index + 1
    });
  };

  render() {
    let body = null;
    if (this.state.index == images.length) {
      body = <UploadCV />;
    } else {
      const image = images[this.state.index];
      body = (
        <Scroller
          url={image.url}
          title={image.title}
          description={image.description}
          swipeLeft={this.swipeLeft}
          swipeRight={this.swipeRight}
        />
      );
    }

    if (this.state.formDone) {
      body = <FormDone />;
    }

    return (
      <div id="app">
        <Header />
        {body}
        <Cookies />
      </div>
    );
  }
}

export default App;
