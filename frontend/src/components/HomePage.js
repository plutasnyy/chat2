import React from 'react'
import {Button, Form, Header, Dropdown} from 'semantic-ui-react'
import './../css/HomePage.css'
import {create} from 'axios';

var options = []

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.roomsDropdownOnChange = this.roomsDropdownOnChange.bind(this);
        this.nickLabelOnChange = this.nickLabelOnChange.bind(this);
        this.newRoomLabelOnChange = this.newRoomLabelOnChange.bind(this);
        this.state = {
            currentRoom: undefined,
            currentRoomID: undefined,
            nick: "",
            newRoom: "",
        }
    }

    roomsDropdownOnChange(e) {
        this.setState({currentRoom: e.target.textContent})

        options.forEach(option => {
            if (option.text === e.target.textContent) {
                this.setState({currentRoomID: option.value})
            }
        })
    }

    nickLabelOnChange(e) {
        this.setState({nick: e.target.value})
    }

    newRoomLabelOnChange(e) {
        this.setState({newRoom: e.target.value})
    }

    handleSubmit(event) {
        if (this.state.nick === "" || (this.state.currentRoom === undefined && this.state.newRoom === "")) {
            alert("Please provide every neccesary data")
        } else {
            if (this.state.currentRoom) {
                this.props.history.push('/room/' + this.state.nick + '/' + this.state.currentRoomID);
            } else {
                const api = create({baseURL: 'http://localhost:8000'})
                api.post('/api/rooms/', {text: this.state.newRoom})
                    .then(res => {
                        console.log(res);
                        console.log(res.data);
                        this.props.history.push('/room/' + this.state.nick + '/' + res.data.id);
                    })
            }
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/rooms/", {})
            .then(res => res.json())
            .then(
                (result) => {
                    result.map(function (item) {
                        options.push({
                            text: item.text,
                            value: item.id,
                        })
                    })
                },
            )
    }

    render() {
        return (
            <div className={'BackgroundImg'}>
                <Form className={'NickNameFormContainer'} onSubmit={this.handleSubmit}>
                    <Header as='h1' textAlign={'center'}>Hi!</Header>
                    <div className={'NickNameForm'}>
                        <Form.Field>
                            <label> Register your name </label>
                            <input placeholder={'Please provide your username'} onChange={this.nickLabelOnChange}/>
                        </Form.Field>
                        <span>
                            <strong>Select a room to go in:{' '} </strong>
                            <Dropdown inline options={options} onChange={this.roomsDropdownOnChange}/>
                        </span>
                        <Form.Field style={{'marginTop': '16px'}}>
                            <label> Or create new </label>
                            <input placeholder={'Please provide room name'} onChange={this.newRoomLabelOnChange}/>
                        </Form.Field>
                        <Button type='submit'>Next</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default HomePage