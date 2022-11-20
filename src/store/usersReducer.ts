import {AppThunk} from "./store";
import {setAppStatusAC} from "./appReducer";
import {usersAPI} from "../api/fourth-api";

type StateType = {
    users: Array<UserType>;
}
type UserType = {
    _id: string
    email: string
    password: string
    registrationDate: string
    lastLoginData: string
    status: string
    __v: number
}

const initialState = {} as StateType;

export const usersReducer = (state: StateType = initialState, action: UsersActionsType): StateType => {

    switch (action.type) {
        case 'users/SET-USERS': {
            return {...state,
                users: action.data}
        }
        default:
            return state
    }
}

//actions
export const setUsersAC = (data: Array<UserType>) => {
    return {
        type: 'users/SET-USERS',
        data
    } as const
}

//thunks
export const getUsersTC = (): AppThunk => {
    return (dispatch) => {
        // dispatch(setAppStatusAC("loading"))

        usersAPI.users()
            .then(res => {

                dispatch(setUsersAC(res.data))
                console.log(res.data)
            })
            .catch(err => {
                const error = err.response
                    ? err.response.data.error
                    : err.message
                console.log(error)
            })
            // .finally(() => dispatch(setAppStatusAC("idle")))
    }
}

export type UsersActionsType = ReturnType<typeof setUsersAC>