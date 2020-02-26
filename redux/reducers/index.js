import { combineReducers } from 'redux'
import { ActionTypes } from '../actions/user'

const user = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return action.payload
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state, user: action.payload
            }
        case ActionTypes.SIGNUP:
            return action.payload
        case ActionTypes.SIGNUP_SUCCESS:
            return {
                ...state, user: action.payload
            }
        case ActionTypes.SET_LOGGED_IN_USER:
            return {
                ...state, user: action.payload
            }
        case ActionTypes.LOGOUT:
            return { user: null };
        default:
            return state
    }
}
const characters = (state = null, action) => {
    switch (action.type) {
        case ActionTypes.GET_CHARACTERS_REQUEST:
            return action.payload
        case ActionTypes.GET_CHARACTERS_SUCCESS:
            return {
                ...state, characters: action.payload
            }
        case ActionTypes.ADD_CHARACTERS_REQUEST:
            return action.payload
        case ActionTypes.ADD_CHARACTERS_SUCCESS:
            return {
                ...state, characters: action.payload
            }
        case ActionTypes.UPDATE_CHARACTERS_REQUEST:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user,
    characters
})

export default rootReducer