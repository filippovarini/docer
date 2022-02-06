import React, { Component } from "react";
import "./Components.css";

export class UploadCV extends Component {
  state = {
    name: null,
    team: null,
    company: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const contestant = (
      <form
        id="credentials"
        // action="http://127.0.0.1:5000/cv-parse"
        // method="POST"
        // enctype="multipart/form-data"
      >
        <div id="text-input">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            name="team"
            required
            id="team"
            type="text"
            placeholder="team number"
            onChange={this.handleChange}
          />
        </div>
        <input
          type="text"
          name="answers"
          style={{ display: "none" }}
          value={this.props.answers}
        />
        <input type="file" name="file" required />
        <input id="submit-button" type="submit" onClick={this.props.handleSubmit} />
      </form>
    );

    const company = (
      <form
        id="credentials"
      >
        <div id="text-input">
          <input
            id="name"
            name="company"
            type="text"
            placeholder="Company Name"
            onChange={this.handleChange}
          />
        </div>
        <input
          type="text"
          name="answers"
          style={{ display: "none" }}
          value={this.props.answers}
        />
        <input id="submit-button" type="submit" onClick={this.props.handleSubmit} />
      </form>
    );

    return (
      <div id="upload-cv">
        <p id="upload-title">Finally...</p>
        <p id="motivation">
          Upload your CV and team number so that we can predict if you will win
          ICHack 2022!
        </p>
        <div id="form">
          <input
            id="company-check"
            type="checkbox"
            onChange={() => {
              this.setState({ company: !this.state.company });
            }}
          />
          <label htmlFor="company-check">I am a sponsor</label>
          {this.state.company ? company : contestant}
        </div>
      </div>
    );
  }
}

export default UploadCV;
