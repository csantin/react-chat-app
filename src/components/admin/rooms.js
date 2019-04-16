import React, { Component } from 'react';
import '../../App.css';
import NewRoom from './newRoom';

const fakeData = [
    { id: 1, Room: "General Chat", Created: "04-01-19", Edited: "04-01-19", Status: "Active" },
    { id: 2, Room: "Film Chat", Created: "04-01-19", Edited: "04-01-19", Status: "Active" },
    { id: 3, Room: "Game Chat", Created: "04-01-19", Edited: "04-01-19", Status: "Active" },
    { id: 4, Room: "Book Chat", Created: "04-01-19", Edited: "04-01-19", Status: "Inactive" },
];

function fetchData() {
    return fakeData;
}

class Rooms extends Component {    
    state = {
        roomData: [],
        editRoom: false
    }

    componentDidMount() {
        const data = fetchData();
        this.setState({
            roomData: data,
            editRoom: false
        })
    }

    onClick() {
        this.setState({ editRoom: true })
    }

    render (){
        console.log(this.state.editRoom)
        return (
            <div className="App">
                <div>
                <h2>Rooms</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Room</th>
                            <th scope="col">Created</th>
                            <th scope="col">Edited</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.roomData).map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.Room}</td>
                                        <td>{item.Created}</td>
                                        <td>{item.Edited}</td>
                                        <td>{item.Status}</td>
                                        <td><button onClick={this.onClick}>Edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button className="center" onClick={this.onClick}>Create Room</button>
            </div>
            <div>
                {(this.state.editRoom) ? <NewRoom></NewRoom> : '' }
            </div>
            </div>
        );
    }
};
  
export default Rooms;