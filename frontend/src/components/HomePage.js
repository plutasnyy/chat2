import React from 'react'
import {Button, Form, Header, Dropdown, Menu} from 'semantic-ui-react'
import './../css/HomePage.css'

const options = [
    {key: 1, text: 'Choice 1', value: 1},
    {key: 2, text: 'Choice 2', value: 2},
    {key: 3, text: 'Choice 3', value: 3},
]

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8000/api/rooms/?format=json", {})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
            )
    }

    render() {
        return (
            <div className={'HomePage'}>
                <Form className={'NickNameFormContainer'}>
                    <Header as='h1' textAlign={'center'}>Hi!</Header>
                    <div className={'NickNameForm'}>
                        <Form.Field>
                            <label> Register your name </label>
                            <input placeholder={'Please provide your username'}/>
                        </Form.Field>
                        <Form.Field>
                            <label> Select room</label>
                            <Menu compact>
                                <Dropdown text='Dropdown' options={options} simple item/>
                            </Menu>
                        </Form.Field>
                        <Form.Field>
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