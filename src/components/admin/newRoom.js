import React, { Component } from 'react';
import '../../App.css';

class NewRoom extends Component {   
    render (){
        return (
            <div className="App">
            <div>
                <h2>New Room:</h2>
                <div className="NewRoom">
                <label>Room Name:</label>
                <input className="logInput" type="text"/>
                <label>Status:</label>
                <select>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select><p></p>
                <button className="login">Save</button>
                </div>
            </div>
            </div>
        );
    }
};
  
export default NewRoom;