
type AppStatusType = 'loading' | 'succeeded'

export type StateType = {
    status: AppStatusType
    error: null | string
}

let initialState = {
    status: 'succeeded',
    error: null
} as StateType

export const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {

    switch (action.type) {
        case 'app/SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'app/SET-ERROR': {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

//actions
export const setAppStatusAC = (status: AppStatusType) => {
    return {
        type: 'app/SET-STATUS',
        status
    } as const
}

export const setAppErrorAC = (error: string | null) => {
    return {
        type: 'app/SET-ERROR',
        error
    } as const
}

export type AppActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setAppErrorAC>