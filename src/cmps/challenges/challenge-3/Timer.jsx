import { Component } from 'react'

export class Timer extends Component {
  componentDidMount() {
    console.log('Timer - Loaded !')
  }

  componentDidUpdate() {
    console.log('Timer got Updated!')
    if (this.props.startFrom < 0) this.props.onDone()
  }

  setTime = () => {
    let currTime = this.props.startFrom
    if (this.props.toTime)
      currTime = (this.props.toTime - new Date().getTime()) / 1000
    return currTime
  }

  render() {
    const startedRedColor = 6
    return (
      <article
        className={`count-down-timer ${
          this.props.startFrom <= startedRedColor && this.props.startFrom !== 0
            ? 'red blink'
            : ''
        }`}
      >
        {this.setTime()}
      </article>
    )
  }
}
