import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Views/Main';
import Login from './Views/Login';
import Signup from './Views/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
