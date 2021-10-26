import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Button from './Components/Button';
import Main from './Views/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
        <Route path='/search'></Route>
      </Switch>
    </Router>
  );
}

export default App;
