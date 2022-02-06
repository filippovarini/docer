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
  };

  handleSubmit = (name, team) => {
    const answer = {
      name,
      team,
      answers: this.state.answers
    };

    console.log(answer);

    fetch("/api/answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ answer })
    })
      .then(res => alert("success"))
      .catch(e => console.log(e));

    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSensKxuhaU_FbjvDnVSXheJwGLhyOevXviHEJT1Cu6iINP2Zg/viewform",
      "_blank"
    );
  };

  render() {
    let body = null;
    if (this.state.index === images.length) {
      console.log(this.state.answers);
      body = <UploadCV handleSubmit={this.handleSubmit} />;
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
