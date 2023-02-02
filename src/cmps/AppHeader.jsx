import { NavLink, withRouter } from 'react-router-dom'

function _AppHeader(props) {

    function onBack() {
        console.log('props:', props)
        props.history.goBack()
    }

    return (
        <header className="app-header">
            <section className="container">
                <h1 className="logo">Robots</h1>
                <section className='back'>
                    <button onClick={onBack}>Back</button>
                </section>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                </nav>
            </section>

        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)

