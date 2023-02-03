//? Libraries
import { Component } from 'react'
import { Howl, Howler } from 'howler'
//? Services
import { utilService } from '../../../services/util.service'
//? Components
import { Timer } from './Timer'

export class CountDown extends Component {
  state = {
    audio: null,
    isStarted: false,
    counter: 10,
    startedCounter: null,
    // toTime: Date.now() + 1000 * 10,
  }

  componentDidMount() {
    console.log('Count Down - Loaded !')
    const audioFile = require('../../../../src/assets/audio/timer/timer.mp3')
    const audio = new Howl({
      src: [audioFile],
    })
    this.setState({ audio, startedCounter: this.state.counter })
  }

  componentWillUnmount() {
    this.onClearInterval()
  }

  //? Private Functions
  onClearInterval = () => {
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  onResetTimer = () => {
    this.onClearInterval()
    this.setState({ counter: this.state.startedCounter, isStarted: false })
  }

  onStartTimer = () => {
    if (this.intervalId) return
    this.setState({ isStarted: true })
    this.intervalId = setInterval(this.onDecrease, 1000)
  }

  onDecrease = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }))
  }

  onDone = () => {
    this.state.audio.play()
    this.onClearInterval()
    this.setState({ counter: 0 })
  }

  //? Private Components
  StartBtn = () => {
    return (
      <button
        className="count-down-start-btn nice-button"
        onClick={this.onStartTimer}
      >
        Start
      </button>
    )
  }

  PauseBtn = () => {
    return (
      <button
        className="count-down-pause-btn nice-button"
        onClick={this.onClearInterval}
      >
        Pause
      </button>
    )
  }

  ResetBtn = () => {
    return (
      <button
        className="count-down-reset-btn nice-button"
        onClick={this.onResetTimer}
      >
        Reset
      </button>
    )
  }
  render() {
    return (
      <section className="count-down">
        <Timer
          startFrom={this.state.counter}
          //   toTime={Date.now() + 1000 * 10}
          onDone={this.onDone}
        />
        {this.StartBtn()}
        {this.PauseBtn()}
        {this.ResetBtn()}
      </section>
    )
  }
}
