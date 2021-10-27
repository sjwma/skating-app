import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Views/Main';
import Login from './Views/Login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Main />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
