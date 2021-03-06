import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login.js'
import Add from './Add.js'
import My from './My.js'
import * as serviceWorker from './serviceWorker';
import { Link } from 'react-router-dom'


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
  <Router>
  <ul className="links">
    <li className="links"><Link to="/account/signup/">Signup</Link></li>
    <li className="links"><Link to="/add/">Add a Recipe</Link></li>
    <li className="links"><Link to="/my/">My Recipes</Link></li>
    <li className="links"><Link to="/">All Recipes</Link></li>
  </ul>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/add/' component={Add} />
      <Route path='/my/' component={My} />
      <Route exact path='/' component={App} />
    </Switch>
  </Router>
  </React.Fragment>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
