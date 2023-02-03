//? Libraries
import { Component } from 'react'
//? Services
import { utilService } from '../../../services/util.service'
export class SeasonClock extends Component {
  state = { clock: new Date(), isDark: false }
  //? For Debug:
  // state = {clock: new Date(`03 20 ${new Date().getFullYear()} 12:00:00`),isDark: false} //* Spring
  // state = {clock: new Date(`06 20 ${new Date().getFullYear()} 12:00:00`),isDark: false} //* Summer
  // state = {clock: new Date(`09 22 ${new Date().getFullYear()} 12:00:00`),isDark: false} //* Autumn
  // state = {clock: new Date(`12 21 ${new Date().getFullYear()} 12:00:00`),isDark: false} //* Winter

  componentDidMount() {
    console.log('Season Clock - Loaded !')
    this.interval = setInterval(
      () => this.setState({ clock: new Date() }),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  //? Private Functions
  handleClick = () => {
    this.setState({ isDark: !this.state.isDark })
  }

  //? Privates Components
  SetSeasonTitle = () => {
    const currSeason = utilService.getSeason(this.state?.clock)
    const currMonth = utilService.getMonthName(this.state?.clock)
    return (
      <article className="season-clock-title">
        {currMonth}
        <span>{` (${currSeason})`}</span>
      </article>
    )
  }

  SetSeasonImg = () => {
    const currSeason = utilService.getSeason(this.state?.clock)
    const seasonImg = require(`../../../../src/assets/imgs/seasons/${
      currSeason ? currSeason.toLowerCase() : 'seasons'
    }.png`)
    return <img src={seasonImg} alt={currSeason} />
  }

  SetDay = () => {
    const currDay = utilService.getDayName(this.state?.clock)
    return <article className="season-clock-day">{currDay}</article>
  }

  SetTime = () => {
    const hour = this.state.clock.getHours()
    const minute = this.state.clock.getMinutes()
    return (
      <article className="season-clock-time">{`${hour}:${minute}`}</article>
    )
  }

  render() {
    return (
      <section
        className={`season-clock ${this.state.isDark ? 'dark' : ''}`}
        onClick={this.handleClick}
        title={`Change to ${this.state.isDark ? 'dark' : 'light'}`}
      >
        {this.SetSeasonTitle()}
        {this.SetSeasonImg()}
        {this.SetDay()}
        {this.SetTime()}
      </section>
    )
  }
}
