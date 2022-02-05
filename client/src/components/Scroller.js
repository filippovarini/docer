import React, { Component } from 'react'
import "./Scroller.css"

export class Scroller extends Component {
  render() {
    return (
      <div id="scroller" style={{"backgroundImage": `url(${this.props.url})`}}>
      </div>
    )
  }
}

export default Scroller
