import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Views/Main';
import Login from './Views/Login';
import Signup from './Views/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import Demographics from './Views/Demographics';
import Searchpage from './Views/Searchpage';
import Friendfilter from './Views/Friendfilter';
import Parkfilter from './Views/Parkfilter';
import Spotfilter from './Views/Spotfilter';
import Friendsearchresult from './Views/Friendsearchresult';
import Parksearchresult from './Views/Parksearchresult';
import Spotsearchresult from './Views/Spotsearchresult';


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
                <Route path="/demographic">
                    <Demographics />
                </Route>
                <Route path="/searchpage">
                    <Searchpage />
                </Route>

                <Route path="/friendfilter">
                    <Friendfilter />
                </Route>
                <Route path="/parkfilter">
                    <Parkfilter />
                </Route>

                <Route path="/parksearchresult">
                    <Parksearchresult />
                </Route>

                <Route path="/spotfilter">
                    <Spotfilter />
                </Route>

                <Route path="/spotsearchresult">
                    <Spotsearchresult />
                </Route>

                <Route path="/friendsearchresult">
                    <Friendsearchresult />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
