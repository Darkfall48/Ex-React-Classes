//? Libraries
import { Component } from 'react'
import { MouseMonitor } from '../cmps/challenges/challenge-4/MouseMonitor'
//? Components

export class Challenge4 extends Component {
  componentDidMount() {
    console.log('Challenge 4 - Loaded !')
  }

  render() {
    return (
      <section className="challenge-section">
        <h1> Challenge 4</h1>
        <article className="challenge-section-article">
          <MouseMonitor />
        </article>
      </section>
    )
  }
}
