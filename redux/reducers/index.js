import { combineReducers } from 'redux'
import { LOGIN_REQUEST, SIGNUP, LOGOUT,LOGIN_SUCCESS } from '../actions/user'

const user = (state = null, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return action.payload
        case LOGIN_SUCCESS:
            console.log('reducer',action)
            return {
                ...state, user: action.payload
            }
        case SIGNUP:
            return action.payload
        case LOGOUT:
            return null;
        default:
            return state
    }
}

const rootReducer = combineReducers({
    user
})

export default rootReducer