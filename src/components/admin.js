import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Events from "./admin/events"
import Chats from "./admin/chats"
import Rooms from "./admin/rooms"

class Admin extends Component {
    render () {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Admin Screen</h1>
                    <button><Link to="/admin/events">Event History</Link></button>
                    <button><Link to="/admin/chats">Chat History</Link></button>
                    <button><Link to="/admin/rooms">Rooms</Link></button>
                    <button><Link to="/">Logout</Link></button>
                    <p></p>
                </div>
                <BrowserRouter>
                <Switch>
                    <Route path="/admin/events" component={Events} exact/>
                    <Route path="/admin/chats" component={Chats} />
                    <Route path="/admin/rooms" component={Rooms} />
                    {/* <Route component={Error} /> */}
          </Switch>
                </BrowserRouter>
            </div>
          );
    }
}
  
  export default Admin;