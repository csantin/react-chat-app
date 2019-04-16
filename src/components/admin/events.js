import React, { Component } from 'react';
import '../../App.css';

const fakeData = [
    { id: 1, Type: "CONNECTION", Date: "04-01-19", User: "", EventID: "101", PPID: "001" },
    { id: 2, Type: "JOIN", Date: "04-01-19", User: "userOne", EventID: "102", PPID: "001" },
    { id: 3, Type: "CONNECTION", Date: "04-01-19", User: "", EventID: "101", PPID: "002" },
    { id: 4, Type: "JOIN", Date: "04-01-19", User: "userTwo", EventID: "102", PPID: "002" },
    { id: 5, Type: "DISCONNECT", Date: "04-01-19", User: "userOne", EventID: "103", PPID: "001" },
    { id: 6, Type: "DISCONNECT", Date: "04-01-19", User: "userTwo", EventID: "103", PPID: "002" },
];

function fetchData() {
    return fakeData;
}

class Events extends Component {    
    state = {
        eventData: []
    }

    componentDidMount() {
        const data = fetchData();
        this.setState({
            eventData: data
        })
    }

    render (){
        return (
            <div className="App">
                <div>
                <h2>Event History</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">User</th>
                            <th scope="col">EventID</th>
                            <th scope="col">PPID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.eventData).map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{item.Type}</td>
                                        <td>{item.Date}</td>
                                        <td>{item.User}</td>
                                        <td>{item.EventID}</td>
                                        <td>{item.PPID}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
};
  
export default Events;