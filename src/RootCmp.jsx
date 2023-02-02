import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import { HomePage } from './views/HomePage';
import { AppHeader } from "./cmps/AppHeader";

function RootCmp() {
    return (
        <Router>
            <div className="main-app">
                <AppHeader />
                <main className='container'>
                    <Switch>
                        <Route path="/" component={HomePage} />
                    </Switch>
                </main>
                <footer>
                    <section className='container'>
                        robotRights 2022 &copy;
                    </section>
                </footer>

            </div>
        </Router>
    );
}

export default RootCmp;
