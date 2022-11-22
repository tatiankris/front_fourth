import {AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, {ThunkAction, ThunkDispatch } from 'redux-thunk';
import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import {usersReducer} from "./usersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    users: usersReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;