import React, { Component } from 'react'
import Scroller from "./components/Scroller"
import images from "./images"

export class App extends Component {
  render() {
    console.log(images)
    return (
      <div>
        docer
        {images.map((url, i) => <Scroller key={i} url={url} />)}
      </div>
    )
  }
}

export default App
