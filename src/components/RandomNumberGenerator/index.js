// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {numRandom: 0}

  onClickButton = () => {
    const genRandomNum = Math.ceil(Math.random() * 100)

    this.setState({numRandom: genRandomNum})
  }

  render() {
    const {numRandom} = this.state
    console.log(numRandom)
    return (
      <div className="app-container">
        <div className="item-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="description-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onClickButton}>
            Generate
          </button>
          <p className="main-heading">{numRandom}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
