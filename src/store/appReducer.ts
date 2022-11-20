let initialState = {
    status: '',
    error: null
}
export type StateType = typeof initialState;

export const appReducer = (state: StateType = initialState, action: AppActionsType): StateType => {

    switch (action.type) {
        case 'app/SET-STATUS': {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

//actions
export const setAppStatusAC = (status: string) => {
    return {
        type: 'app/SET-STATUS',
        status
    } as const
}

export type AppActionsType = ReturnType<typeof setAppStatusAC>