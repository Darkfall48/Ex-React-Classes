//? Libraries
import { Component } from 'react'
//? Components
import { AnimalList } from '../cmps/challenges/challenge-1/AnimalList'

export class Challenge1 extends Component {
  componentDidMount() {
    console.log('Challenge 1 - Loaded !')
  }

  render() {
    return (
      <section className="challenge-section">
        <h1> Challenge 1</h1>
        <article className="challenge-section-article">
          <AnimalList />
        </article>
      </section>
    )
  }
}
