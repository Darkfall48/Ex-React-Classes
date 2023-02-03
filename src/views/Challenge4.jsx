//? Libraries
import { Component } from 'react'
//? Components

export class Challenge4 extends Component {
  componentDidMount() {
    console.log('Challenge 4 - Loaded !')
  }

  render() {
    return (
      <section className="challenge-section">
        <h1> Challenge 4</h1>
        <article className="challenge-section-article"></article>
      </section>
    )
  }
}
