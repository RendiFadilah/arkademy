import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Login extends Component{
    render(){
        return(
            <div>
                <form method="post">
                    <label>Username</label>
                    <input type="text" placeholder="Username" class="username"></input>
                    <br></br>
                    <label>Password</label>
                    <input type="password" placeholder="Passowrd" class="password"></input>
                    <br></br>
                    <a href="/dashboard" path="/dashboard" component={Dashboard} class="button">Masuk</a>

                </form>
            </div>
        );
    }
}
export default Login;