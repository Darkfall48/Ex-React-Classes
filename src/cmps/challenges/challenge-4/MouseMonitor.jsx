//? Libraries
import React, { Component } from 'react'

export class MouseMonitor extends Component {
  state = { isOn: true, pos: { x: 0, y: 0 } }

  componentDidMount() {
    console.log('Mouse Monitor - Loaded !')
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    console.log('Mouse got Un-Mounted!')
    document.removeEventListener('mousemove', this.handleMouseMove)
  }

  //? Private Functions
  handleMouseMove = (event) => {
    this.setState({
      pos: { x: event.clientX, y: event.clientY },
    })
  }

  handleToggle = () => {
    this.setState(
      (prevState) => ({
        isOn: !prevState.isOn,
      }),
      () => {
        if (this.state.isOn) {
          document.addEventListener('mousemove', this.handleMouseMove)
        } else {
          document.removeEventListener('mousemove', this.handleMouseMove)
        }
      }
    )
  }

  //? Private Components
  SetMousePos = () => {
    const { pos } = this.state
    return (
      <div className="mouse-monitor-pos">
        <h2 className="mouse-monitor-pos-x">
          X: <span>{pos.x}</span>
        </h2>
        <h2 className="mouse-monitor-pos-y">
          Y: <span>{pos.y}</span>
        </h2>
      </div>
    )
  }

  ToggleBtn = () => {
    const { isOn } = this.state
    return (
      <button
        className="mouse-monitor-toggle-btn nice-button"
        onClick={this.handleToggle}
      >
        {isOn ? 'Pause' : 'Resume'}
      </button>
    )
  }

  render() {
    return (
      <article className={`mouse-monitor`}>
        <h1 className="mouse-monitor-title">Mouse Position</h1>
        {this.SetMousePos()}
        {this.ToggleBtn()}
      </article>
    )
  }
}
