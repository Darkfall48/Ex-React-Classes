//? Libraries
import { Component } from 'react'

export class Challenge1 extends Component {
  componentDidMount() {
    console.log('Challenge 1 - Loaded !')
  }

  render() {
    return (
      <section className="challenge-section">
        <h1> Challenge 1</h1>
      </section>
    )
  }
}
