import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Views/Main';
import Login from './Views/Login';
import Signup from './Views/Signup';

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
            </Switch>
        </Router>
    );
}

export default App;
