//? Libraries
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//? Style
import './assets/scss/imports.scss'
//? Components
import { HomePage } from './views/HomePage'
import { Challenge1 } from './views/Challenge1'
import { Challenge2 } from './views/Challenge2'
import { Challenge3 } from './views/Challenge3'
import { Challenge4 } from './views/Challenge4'
import { Challenge5 } from './views/Challenge5'
import { AppHeader } from './cmps/app/AppHeader'
import { AppFooter } from './cmps/app/AppFooter'

function RootCmp() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader />
        <main className="main-container">
          <Switch>
            <Route path="/challenge-1" component={Challenge1} />
            <Route path="/challenge-2" component={Challenge2} />
            <Route path="/challenge-3" component={Challenge3} />
            <Route path="/challenge-4" component={Challenge4} />
            <Route path="/challenge-5" component={Challenge5} />
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

export default RootCmp
