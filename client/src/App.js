import React, { Component } from "react";
import Scroller from "./components/Scroller";
import Cookies from "./components/Cookies";
import Header from "./components/Header";
import UploadCV from "./components/UploadCV";
import FormDone from "./components/FormDone";
import images from "./images";
import "./App.css";
import bitString from "./bitString";

export class App extends Component {
  state = {
    index: 0,
    answers: [],
    formDone: false
  };

  saveChoice = liked => {
    this.setState({
      answers: [...this.state.answers, liked],
      index: this.state.index + 1
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ formDone: true })
/* 
    fetch("https://docer-ichack.herokuapp.com/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ answer })
    })
      .then(res => )
      .catch(e => console.log(e));

    window.open(
      "https://docs.google.com/forms/d/13K5gdATUprxLywVXY2K-YZ2jf8hMehEzUHQV6Le0uSY/edit",
      "_blank"
    ); */
  };

  render() {
    let body = null;
    if (this.state.index === images.length) {
      body = (
        <UploadCV
          handleSubmit={this.handleSubmit}
          answers={bitString(this.state.answers)}
        />
      );
    } else {
      const image = images[this.state.index];
      body = (
        <Scroller
          url={image.url}
          title={image.title}
          description={image.description}
          header={image.header}
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
