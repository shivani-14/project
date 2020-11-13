import React, { Component } from 'react'

import ReactStoreIndicator from 'react-score-indicator'

class App2 extends Component {
  render () {
    return (
      <ReactStoreIndicator
        value={30}
        maxValue={100}
      />
    )
  }
}

export default App2;