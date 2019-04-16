import React, { Component } from 'react';
import '../../App.css';

const fakeData = [
    { id: 1, Date: "04-01-19", User: "userOne", Message: "Hey", Room: "General Chat" },
    { id: 2, Date: "04-01-19", User: "userOne", Message: "What's up?", Room: "General Chat" },
    { id: 3, Date: "04-01-19", User: "userTwo", Message: "Not much, how about u", Room: "General Chat" },
    { id: 4, Date: "04-01-19", User: "userOne", Message: "Have a lab test soon.", Room: "General Chat" },
    { id: 5, Date: "04-01-19", User: "userTwo", Message: "Sucks, good luck", Room: "General Chat" },
    { id: 6, Date: "04-01-19", User: "userOne", Message: "Thanks!", Room: "General Chat" },
];

function fetchData() {
    return fakeData;
}

class Chats extends Component {    
    state = {
        chatData: []
    }

    componentDidMount() {
        const data = fetchData();
        this.setState({
            chatData: data
        })
    }

    render (){
        return (
            <div className="App">
                <div>
                <h2>Chat History</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">User</th>
                            <th scope="col">Message</th>
                            <th scope="col">Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.chatData).map(item => {
                                return(
                                    <tr key={item.id}>
                                        <td>{item.Date}</td>
                                        <td>{item.User}</td>
                                        <td>{item.Message}</td>
                                        <td>{item.Room}</td>
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
  
export default Chats;