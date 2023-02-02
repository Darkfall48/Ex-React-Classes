//? Libraries
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
//? Style
import './assets/scss/imports.scss'
//? Components
import { HomePage } from './views/HomePage'
import { AppHeader } from './cmps/app/AppHeader'
import { AppFooter } from './cmps/app/AppFooter'

function RootCmp() {
  return (
    <Router>
      <div className="main-app">
        <AppHeader />
        <main className="container">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

export default RootCmp
