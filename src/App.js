import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Login from "./components/login";
import Room from "./components/room";
import Admin from "./components/admin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <h1>My Chat App</h1>
          <button className="admin"><Link to="/login">Admin Login</Link></button>
          <button className="admin"><Link to="/">Chat</Link></button>
          <p></p>
        </div>
          <Switch>
          <Route path="/" component={Room} exact/>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          {/* <Route component={Error} /> */}
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
