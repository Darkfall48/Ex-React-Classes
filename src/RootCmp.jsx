//? Libraries
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//? Style
import './assets/scss/imports.scss'
//? Components
import { HomePage } from './views/HomePage'
import { AnimalIndex } from './views/AnimalIndex'
import { SeasonClockIndex } from './views/SeasonClockIndex'
import { CountDownIndex } from './views/CountDownIndex'
import { MouseMonitor } from './views/MouseMonitorIndex'
import { WatcherIndex } from './views/WatcherIndex'
import { AppHeader } from './cmps/app/AppHeader'
import { AppFooter } from './cmps/app/AppFooter'

function RootCmp() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader />
        <main className="main-container">
          <Switch>
            <Route path="/challenge-1" component={AnimalIndex} />
            <Route path="/challenge-2" component={SeasonClockIndex} />
            <Route path="/challenge-3" component={CountDownIndex} />
            <Route path="/challenge-4" component={MouseMonitor} />
            <Route path="/challenge-5" component={WatcherIndex} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

export default RootCmp
