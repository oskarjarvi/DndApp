export const ActionTypes = {
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGOUT: 'LOGOUT',
    SIGNUP: 'SIGNUP',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    GET_CHARACTERS_REQUEST: ' GET_CHARACTERS_REQUEST',
    GET_CHARACTERS_SUCCESS: 'GET_CHARACTERS_SUCCESS',
    GET_CHARACTERS_FAILED: 'GET_CHARACTERS_FAILED',
    ADD_CHARACTERS_REQUEST: ' ADD_CHARACTERS_REQUEST',
    ADD_CHARACTERS_SUCCESS: 'ADD_CHARACTERS_SUCCESS',
    ADD_CHARACTERS_FAILED: 'ADD_CHARACTERS_FAILED',
    UPDATE_CHARACTERS_REQUEST: ' UPDATE_CHARACTERS_REQUEST',
    UPDATE_CHARACTERS_SUCCESS:' UPDATE_CHARACTERS_SUCCESS',
    UPDATE_CHARACTERS_FAILED:' UPDATE_CHARACTERS_FAILED',
    SET_LOGGED_IN_USER: 'SET_LOGGED_IN_USER'
}

export const Login = (data) => ({
    type: ActionTypes.LOGIN_REQUEST,
    payload: data
})
export const Signup = (data) => ({
    type: ActionTypes.SIGNUP,
    payload: data
})
export const Logout = () => ({
    type:ActionTypes.LOGOUT
})
export const SetCurrentUser = (data) => ({
    type:ActionTypes.SET_LOGGED_IN_USER,
    payload:data
})
export const GetCurrentUserCharacters = (data) => ({
    type:ActionTypes.GET_CHARACTERS_REQUEST,
    payload:data
})
export const AddCharacter = (data) => ({
    type:ActionTypes.ADD_CHARACTERS_REQUEST,
    payload:data,
})
export const UpdateCharacter = (data) => ({
    type:ActionTypes.UPDATE_CHARACTERS_REQUEST,
    payload:data
})