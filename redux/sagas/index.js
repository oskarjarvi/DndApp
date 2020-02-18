import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../utils/Api';
import { ActionTypes } from '../actions/user';

function* fetchCharacters(action) {
    try {
        const characters = yield call(Api.getCharacters, action.payload.userId)
        yield put({ type: ActionTypes.GET_CHARACTERS_SUCCESS, characters: characters })
    }
    catch (e) {
        yield put({ type: ActionTypes.GET_CHARACTERS_FAILED, message: e.message })
    }
}
function* login(action) {
    try {
        const response = yield call(Api.Login, {...action.payload})
        if(response)
        {
            yield put({type: ActionTypes.LOGIN_SUCCESS, data: response})
        }
        else {
            console.log(response)
        }
    } catch (e) {
        yield put({type: ActionTypes.LOGIN_ERROR, message: e.message})
    }
}
function* signup(action) {
    try {
        const response = yield call(Api.SignUp, {...action.payload})
        yield put({type: ActionTypes.SIGNUP_SUCCESS, data: response})
    } catch (e) {
        yield put({type: ActionTypes.SIGNUP_ERROR, message: e.message})
    }
}

function* saga() {
    yield takeLatest(ActionTypes.LOGIN_REQUEST, login)
    yield takeLatest(ActionTypes.SIGNUP, signup)
    yield takeLatest(ActionTypes.GET_CHARACTERS_REQUEST, fetchCharacters)
}
export default saga;