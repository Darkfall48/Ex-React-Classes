//? Libraries
import { NavLink, withRouter } from 'react-router-dom'

function _AppHeader(props) {
  function onBack() {
    console.log('props:', props)
    props.history.goBack()
  }

  return (
    <header className="app-header">
      <h1 className="app-header-logo">Challenges:</h1>
      <nav className="app-header-main-nav">
        <NavLink exact to="/" title="Home Page">
          Home
        </NavLink>
        <NavLink exact to="/challenge-1" title="Challenge 1">
          Animals
        </NavLink>
        <NavLink exact to="/challenge-2" title="Challenge 2">
          Season Clock
        </NavLink>
        <NavLink exact to="/challenge-3" title="Challenge 3">
          Count Down
        </NavLink>
        <NavLink exact to="/challenge-4" title="Challenge 4">
          Mouse Monitor
        </NavLink>
        <NavLink exact to="/challenge-5" title="Challenge 5">
          Watcher
        </NavLink>
      </nav>
      <button className="app-header-back-btn nice-button" onClick={onBack}>
        Back
      </button>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
