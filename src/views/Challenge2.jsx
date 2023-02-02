//? Libraries
import { Component } from 'react'
//? Components
import { SeasonClock } from '../cmps/challenges/challenge-2/SeasonClock'

export class Challenge2 extends Component {
  componentDidMount() {
    console.log('Challenge 2 - Loaded !')
  }

  render() {
    return (
      <section className="challenge-section">
        <h1> Challenge 2</h1>
        <SeasonClock />
      </section>
    )
  }
}
