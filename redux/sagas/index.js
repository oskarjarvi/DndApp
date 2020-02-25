import { call, put, takeLatest } from 'redux-saga/effects'
import Api from '../../utils/Api';
import { LOGIN_REQUEST, SIGNUP,LOGIN_SUCCESS } from '../actions/user'


// function* fetchCharacters(action) {
//     try {

//         const characters = yield call(Api.getCharacters, action.payload.userId)
//         yield put({ type: GET_CHARACTERS_SUCCESS, payload: characters })
//     }
//     catch (e) {
//         yield put({ type: GET_CHARACTERS_FAILED, message: e.message })
//     }
// }
function* login(action) {
    try {
        const response = yield call(Api.Login, {...action.payload})
        if(response)
        {
            console.log('yep')
            yield put({type: 'LOGIN_SUCCESS', user: response})
        }
        else {
            console.log(response)
        }
    } catch (e) {
        console.log('eyyy')
        yield put({type: 'LOGIN_ERROR', message: e.message})
    }
}
function* signup(action) {
    try {
        const response = yield call(Api.SignUp, {...action.payload})
        yield put({type: 'SIGNUP_SUCCESS', data: response})
    } catch (e) {
        yield put({type: 'SIGNUP_ERROR', message: e.message})
    }
}

function* saga() {
    yield takeLatest('LOGIN_REQUEST', login)
    yield takeLatest('SIGNUP', signup)

}
export default saga;