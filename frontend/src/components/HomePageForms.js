import React from 'react'
import {Button, Form, Header} from 'semantic-ui-react'
import './../css/NickNameForm.css'

export const InitialForm = (data) => (
    <Form className={'NickNameFormContainer'} onSubmit={data.props.onNextClick}>
        <Header as='h1' textAlign={'center'}>Hi!</Header>
        <div className={'NickNameForm'}>
            <Form.Field>
                <label> Register your name </label>
                <input placeholder={'Please provide your username'} defaultValue={data.props.homePage.name}/>
            </Form.Field>
            <Button type='submit'>Next</Button>
        </div>
    </Form>
)

export const RoomsForm = (data) => (
    <Form className={'NickNameFormContainer'} onSubmit={data.props.onBackClick}>
        <Header as='h1' textAlign={'center'}>Tu bydo pokoje</Header>
            <Button type='submit'>Back</Button>
    </Form>
)
