import React, { Component } from 'react';
import '../App.css';
import Input from "./Input";
import Admin from "./admin";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

class Login extends Component {    
    render (){
        return (
            <div className="App">
            <div className="Login">
                <label>Login:</label>
                <input className="logInput" type="text"/>

                <label>Password:</label>
                <input className="logInput" type="password"/>
                <p></p>
                <button className="login"><Link to="/admin">Login</Link></button>
            </div>
          </div>
        );
    }
};
  
  export default Login;