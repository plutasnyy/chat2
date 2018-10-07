import React from 'react'
import './../css/HomePage.css'
import {Container} from "semantic-ui-react";
import Websocket from '../Websocket';

var roomData = null;

class Room extends React.Component {
    componentDidMount() {
        fetch("http://localhost:8000/api/rooms/" + this.props.match.params.roomID, {})
            .then(res => res.json())
            .then(
                (result) => {
                    var div = document.getElementById('roomHeader');
                    roomData = result;
                    div.innerHTML = roomData.text;
                },
            )
    }

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleData(data) {
        let result = JSON.parse(data);
        console.log(result);
    }

    onOpen() {
        console.log("Open ws");
    }

    onClose() {
        console.log("Close ws");
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.sendMessage(this.state.value);
    }

    sendMessage(message) {
        let x = JSON.stringify({
            'message': message,
            'roomID': this.props.match.params.roomID,
            'username': this.props.match.params.username,
        })
        console.log(x);
        this.refWebsocket.sendMessage(x);
    }

    render() {
        let websocketUrl = 'ws://localhost:8000/ws/chat/' + this.props.match.params.roomID + '/';
        return (
            <div className={'BackgroundImg'}>
                <Container>
                    <h3>Room:
                        <div id='roomHeader'></div>
                        Nickname:{this.props.match.params.username}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                        In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
                        link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                        vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                        enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
                        ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                        Curabitur ullamcorper ultricies nisi.
                    </p>
                </Container>
                Hello <br/>
                <div id="chat-log" cols="100" rows="20"></div>
                <br/>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <Websocket url={websocketUrl} onMessage={this.handleData} onOpen={this.onOpen} onClose={this.onClose}
                           ref={Websocket => {
                               this.refWebsocket = Websocket;
                           }}/>
            </div>
        )
    }
}

export default Room;