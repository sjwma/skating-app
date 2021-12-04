import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Main from './Views/Main';
import Login from './Views/Login';
import Signup from './Views/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Views/Home';
import Profile from './Views/Profile';
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
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/profile" component={Profile} />

                <Route path="/home" component={Home} />
                <Route path="/demographic" component={Demographics} />

                <Route path="/searchpage" component={Searchpage} />

                <Route path="/friendfilter" component={Friendfilter} />
                <Route path="/parkfilter" component={Parkfilter} />

                <Route path="/parksearchresult" component={Parksearchresult} />
                <Route path="/spotfilter" component={Spotfilter} />
                <Route path="/spotsearchresult" component={Spotsearchresult} />

                <Route
                    path="/friendsearchresult"
                    component={Friendsearchresult}
                />
            </Switch>
        </Router>
    );
}

export default App;
