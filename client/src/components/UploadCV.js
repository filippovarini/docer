import React, { Component } from "react";
import "./Components.css";

export class UploadCV extends Component {
  state = {
    name: null,
    team: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div id="upload-cv">
        <p id="upload-title">Finally...</p>
        <p id="motivation">
          This test helps comanies better match an applicant's profile with
          their team. Upload your CV to get company to know you!
        </p>

        <form id="credentials">
          <input
            id="name"
            type="text"
            placeholder="name"
            onChange={this.handleChange}
          />
          <input
            id="team"
            type="text"
            placeholder="team number"
            onChange={this.handleChange}
          />
        </form>

        <p
          style={
            this.state.name && this.state.team ? null : { display: "none" }
          }
          id="upload-button"
          onClick={() =>
            this.props.handleSubmit(this.state.name, this.state.team)
          }
        >
          UPLOAD
        </p>
      </div>
    );
  }
}

export default UploadCV;
