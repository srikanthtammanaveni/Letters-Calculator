// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  countLetters = event => {
    const {value} = event.target

    this.setState({
      inputValue: value,
    })
  }

  render() {
    const {inputValue} = this.state
    const count = inputValue.length
    return (
      <div className="bg">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="input">
            Enter the phrase
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter the phrase"
            id="input"
            onChange={this.countLetters}
          />
          <p className="para">No.of letters: {count}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
