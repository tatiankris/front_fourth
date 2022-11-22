import * as React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Users from "./components/users/Users";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import {useAppSelector} from "./hooks";

export const LOGIN = '/login'
export const REGISTER = '/register'
export const USER = '/users'


export const Routing = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    if (isLoggedIn) {
        return (
            <Routes>
                <Route path={USER} element={<Users/>}/>
                {/*<Route path={LOGIN} element={<Login/>}/>*/}
                <Route path={REGISTER} element={<Register/>}/>
                <Route
                    path="*"
                    element={<Navigate to={USER} replace />}
                />
            </Routes>

        )
    }
    return (
        <Routes>
            <Route path={LOGIN} element={<Login/>}/>
            <Route path={REGISTER} element={<Register/>}/>
            <Route
                path="*"
                element={<Navigate to={LOGIN} replace />}
            />
        </Routes>
    )


}