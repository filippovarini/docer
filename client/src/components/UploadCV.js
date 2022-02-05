import React, { Component } from "react";
import "./Components.css";

export class UploadCV extends Component {
  render() {
    return (
      <div id="upload-cv">
        <p id="upload-title">Finally...</p>
        <p id="motivation">
          Our project aims at giving more insightful data from people
          professional traits to help companies make better decisions on the
          hiring process. If you are interested, drop us your CV so that we can
          send it to companies.
        </p>
        <a
          id="upload-button"
          href="https://drive.google.com/drive/folders/1p2uCQFIg4tYDeciAB80E_LQBLMZ1UtDu?usp=sharing"
        >
          UPLOAD
        </a>
      </div>
    );
  }
}

export default UploadCV;
