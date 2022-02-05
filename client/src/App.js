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
    index: 0,
    answers: []
  };

  saveChoice = liked => {
    this.setState({
      answers: [...this.state.answers, liked],
      index: this.state.index + 1
    });
    if (this.state.index === images.length) {
      this.saveAnswers();
    }
  };

  saveAnswers = () => {
    console.log(this.state.answers);
  };

  render() {
    let body = null;
    if (this.state.index === images.length) {
      console.log(this.state.answers);
      body = <UploadCV />;
    } else {
      const image = images[this.state.index];
      body = (
        <Scroller
          url={image.url}
          title={image.title}
          description={image.description}
          saveChoice={this.saveChoice}
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
