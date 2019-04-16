import React, { Component } from 'react';
import '../App.css';

import Messages from "./Messages";
import Input from "./Input";

function randomName() {
  const adjectives = [
    "autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark",
    "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter",
    "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue",
    "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long",
    "late", "lingering", "bold", "little", "morning", "muddy", "old", "red",
    "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering",
    "withered", "wild", "black", "young", "holy", "solitary", "fragrant",
    "aged", "snowy", "proud", "floral", "restless", "divine", "polished",
    "ancient", "purple", "lively", "nameless"
  ];
  const nouns = [
    "waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning",
    "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter",
    "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook",
    "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly",
    "feather", "grass", "haze", "mountain", "night", "pond", "darkness",
    "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder",
    "violet", "water", "wildflower", "wave", "water", "resonance", "sun",
    "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog",
    "smoke", "star"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class Room  extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("xYpokhfsQvT2ASu9", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      let commandCheck = data.split(' ');
      if(commandCheck[0] === "Username:"){
        data = member.clientData.username + " changed name to: " + commandCheck[1]
        member.clientData.username = commandCheck[1]
        messages.push({member, text: data})
      }
      else{
      messages.push({member, text: data});
      }
      this.setState({messages});
    });

    room.on('member_join', (member) => {
      // Member object
      const message = member.clientData.username + " has joined";
      const messages = this.state.messages;
      messages.push({member, text: message});
      this.setState({messages});
    });

    room.on('member_leave', function(member) {
      // Member object
      const message = member.clientData.username + " has left";
      console.log(message)
      console.log(member)
    //   console.log(this)
    //   const messages = this.state.messages;
    //   messages.push({member, text: message});
    //   this.setState({messages});
    });
 
    room.on('members', function(members) {
      // List of members as an array
      console.log(members)
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {
    return (
        <div className="App">
            <div>
                <h2>You are {this.state.member.username}</h2>
                <div>
                    Current chat:
                    <select>
                        <option value="general">General Chat</option>
                        <option value="film">Film Chat</option>
                        <option value="game">Game Chat</option>
                    </select>
                </div>
            </div>
            <Messages
                messages={this.state.messages}
                currentMember={this.state.member}
            />
            <Input
                onSendMessage={this.onSendMessage}
            />
        </div>
    );
  }
}

export default Room;
