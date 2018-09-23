import React from 'react'
import {Button, Form, Header} from 'semantic-ui-react'
import './../css/NickNameForm.css'

const NickNameForm = () => (
    <Form className={'NickNameFormContainer'}>
        <Header as='h1' textAlign={'center'}>Hi!</Header>
        <div className={'NickNameForm'}>
            <Form.Field>
                <label>Register your name</label>
                <input placeholder='Nick'/>
            </Form.Field>
            <Button type='submit'>Next</Button>
        </div>
    </Form>
)

export default NickNameForm