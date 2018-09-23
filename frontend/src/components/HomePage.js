import React from 'react'
import './../css/HomePage.css'
import {backHome, goRooms} from '../actions/actions';
import {InitialForm, RoomsForm} from './HomePageForms'

import connect from "react-redux/es/connect/connect";

class HomePage extends React.Component{
    render(){
        var isHomePage = this.props.homePage.position === 'HOME';
        console.log(isHomePage)
        console.log(this.props)
        return(
            <div className={'HomePage'}>
                {isHomePage ? (<InitialForm props={this.props}/>) : (<RoomsForm props={this.props}/>)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNextClick: event => {
            dispatch(goRooms(event.target.value))
        },
        onBackClick: (event) => {
            dispatch(backHome())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage)