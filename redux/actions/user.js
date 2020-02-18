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
    GET_CHARACTERS_FAILED: 'GET_CHARACTERS_FAILED'
}

export const Login_REQUESTRequest = (data) => ({
    type: ActionTypes.LOGIN_REQUEST,
    payload: data
})
export const Signup = (data) => ({
    type: ActionTypes.Signup,
    payload: data
})

// export const getUser = uid => {
//     return async (dispatch, getState) => {
//         try {
//             const user = await db
//                 .collection('users')
//                 .doc(uid)
//                 .get()

//             dispatch({ type: ActionTypes.LOGIN_REQUEST, payload: user.data() })
//         } catch (e) {
//             alert(e)
//         }
//     }
// }

// export const signup = () => {
//     return async (dispatch, getState) => {
//         try {
//             const { email, password } = getState().user
//             const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)
//             if (response.user.uid) {
//                 const user = {
//                     uid: response.user.uid,
//                     email: email
//                 }

//                 db.collection('users')
//                     .doc(response.user.uid)
//                     .set(user)

//                 dispatch({ type: ActionTypes.SIGNUP, payload: user })
//             }
//         } catch (e) {
//             alert(e)
//         }
//     }
// }