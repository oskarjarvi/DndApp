import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../utils/Api';
import { ActionTypes } from '../actions/user'
import { useCurrentUser } from '../../utils/customHooks';


function* fetchCharacters(action) {
    try {

        const characters = yield call(Api.getCharacters, action.payload.userId)
        yield put({ type: GET_CHARACTERS_SUCCESS, payload: characters })
    }
    catch (e) {
        yield put({ type: GET_CHARACTERS_FAILED, message: e.message })
    }
}
function* login(action) {
    try {
        const response = yield call(Api.Login, {...action.payload})
        if(response)
        {
            yield put({type: ActionTypes.LOGIN_SUCCESS, payload: response})
        }
        else {
            console.log('response')
        }
    } catch (e) {
        yield put({type: ActionTypes.LOGIN_ERROR, message: e.message})
    }
}
function* signup(action) {
    try {
        const response = yield call(Api.SignUp, {...action.payload})
        if(response)
        {
            yield put({type: ActionTypes.SIGNUP_SUCCESS, data: response})
        }
        else {
            console.log('whuddup')
        }
    } catch (e) {
        yield put({type: ActionTypes.SIGNUP_ERROR, message: e.message})
    }
}
function* addCharacter(action) {
    try {
        const response = yield call(Api.addCharacter, action.payload.user, {...action.payload.character})
        yield put({type: ActionTypes.ADD_CHARACTERS_SUCCESS, data: response})
    } catch (e) {
        yield put({type: ActionTypes.SIGNUP_ERROR, message: e.message})
    }
}
function* saga() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login)
    yield takeLatest(ActionTypes.SIGNUP, signup)
    yield takeLatest(ActionTypes.ADD_CHARACTERS_REQUEST, addCharacter)

}
export default saga;