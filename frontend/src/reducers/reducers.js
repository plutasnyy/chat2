import {combineReducers} from 'redux'
import {
    GO_ROOMS,
    BACK_HOME,
    Postions,
} from './../actions/actions'

const initialState = {
    name: '',
    position: Postions.HOME,
}

function homePage(state = initialState, action) {
    switch (action.type) {
        case GO_ROOMS:
            return [{
                name: action.name,
                position: Postions.ROOMS,
            }]
        case BACK_HOME:
            return [{
                name: state[0].name,
                position: Postions.HOME
            }]
        default:
            return state
    }
}


var chatApp = combineReducers({
    homePage,
})

export default chatApp