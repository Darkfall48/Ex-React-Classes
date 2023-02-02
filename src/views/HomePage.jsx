//? Libraries
import { Component } from 'react'

export class HomePage extends Component {
  componentDidMount() {
    console.log('Home Page - Loaded !')
  }

  render() {
    return (
      <section className="home-page">
        <h1>Ex - React Classes</h1>
      </section>
    )
  }
}
