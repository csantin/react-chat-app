import React, { Component } from 'react';
import '../../App.css';

class NewRoom extends Component {   
    render (){
        return (
            <div>
                <h2>New Room:</h2>
                <label>Room Name:</label>
                <input className="roomName" type="text"/>
                <label>Status:</label>
                <select>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
        );
    }
};
  
export default NewRoom;