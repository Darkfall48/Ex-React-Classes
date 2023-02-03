//? Libraries
import { Component } from 'react'
import { CountDown } from '../cmps/challenges/challenge-3/CountDown'
//? Components

export class Challenge3 extends Component {
  componentDidMount() {
    console.log('Challenge 3 - Loaded !')
  }

  render() {
    return (
      <section className="challenge-section">
        <h1> Challenge 3</h1>
        <article className="challenge-section-article">
          <CountDown />
        </article>
      </section>
    )
  }
}
