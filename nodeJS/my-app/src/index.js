import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './Page/HelloWorld';
import Dashboard from './Page/Dashboard';
import Admin from './Page/Admin';
import Login from './Page/Login';
import User from './Page/User';
import {Route, BrowserRouter as Router, Link, Switch} from 'react-router-dom';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/helloworld">Hello World</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <Switch>
            <Route exact path="/" component={HelloWorld}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/login" component={Login}/>
            <Route path="/user/:id" component={User}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);


serviceWorker.unregister();