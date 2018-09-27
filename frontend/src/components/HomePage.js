import React from 'react'
import {Button, Form, Header, Dropdown, Menu} from 'semantic-ui-react'
import './../css/HomePage.css'

var options = []

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.roomsDropdownOnChange = this.roomsDropdownOnChange.bind(this);
        this.state = {currentRoom: undefined}
    }

    roomsDropdownOnChange(e) {
        e.persist();
        this.setState({currentRoom: e.target.textContent})
    }

    handleSubmit(event, {value}) {
        alert('An essay was submitted');
        event.preventDefault();
        console.log(event)
        console.log(value)
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
            <div className={'HomePage'}>
                <Form className={'NickNameFormContainer'} onSubmit={this.handleSubmit}>
                    <Header as='h1' textAlign={'center'}>Hi!</Header>
                    <div className={'NickNameForm'}>
                        <Form.Field>
                            <label> Register your name </label>
                            <input placeholder={'Please provide your username'}/>
                        </Form.Field>
                        <span>
                            <strong>Select a room to go in:{' '} </strong>
                            <Dropdown inline options={options} onChange={this.roomsDropdownOnChange}/>
                        </span>
                        <Form.Field style={{'marginTop': '16px'}}>
                            <label> Or create new </label>
                            <input placeholder={'Please provide room name'}/>
                        </Form.Field>
                        <Button type='submit'>Next</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default HomePage