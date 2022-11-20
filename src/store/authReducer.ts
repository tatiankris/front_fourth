import {authAPI} from "../api/fourth-api";
import {AppDispatch} from "./store";

let initialState = {
    isLoggedIn: false,
    signUp: false,
}
export type StateType = typeof initialState;

export const authReducer = (state: StateType = initialState, action: AuthActionsType): StateType => {

    switch (action.type) {
        case 'auth/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.value}
        }
        case 'auth/SET-SIGN-UP': {
            return {...state, signUp: action.value}
        }
        default:
            return state
    }
}

//actions
export const loginAC = (value: boolean) => {
    return {
        type: 'auth/SET-IS-LOGGED-IN',
        value
    } as const
}

export const registerAC = (value: boolean) => {
    return {
        type: 'auth/SET-SIGN-UP',
        value
    } as const
}

//thunk
// export const loginTC = (data: LoginDataType) => {
//     return (dispatch: AppDispatch) => {
//         dispatch(setAppStatusAC("loading"))
//         authAPI.login(data)
//             .then(res => {
//                 dispatch(setProfileAC(res.data))
//                 dispatch(loginAC(true))
//             })
//             .catch(err => {
//                 const error = err.response
//                     ? err.response.data.error
//                     : err.message
//                 handleServerNetworkError({message: error}, dispatch)
//             })
//             .finally(() => dispatch(setAppStatusAC("idle")))
//     }
// }


export type AuthActionsType = ReturnType<typeof loginAC> | ReturnType<typeof registerAC>

