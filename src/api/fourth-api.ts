import axios from "axios";
import {GridSelectionModel} from "@mui/x-data-grid";

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'https://neko-back.herokuapp.com/2.0' ,
    // baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7542/2.0/' : 'https://neko-back.herokuapp.com/2.0/',
    baseURL: 'http://localhost:5000',
})

export const authAPI = {
    login(data: LoginDataType) {
        return instance.post('/api/auth/login', data)
    },
    register(data: RegisterDataType) {
        return instance.post('/api/auth/registration', data)
    }
}

export const usersAPI = {
    users() {
        return instance.get('/api/users')
    },

    delete(usersId: GridSelectionModel) {
        return instance.put('/api/users/delete', {usersId})
    },

    block(usersId: GridSelectionModel) {
        return instance.put('/api/users/block', {usersId})
    },

    unblock(usersId: GridSelectionModel) {
        return instance.put('/api/users/unblock', {usersId})
    },


}

export type LoginDataType = {
    email: string
    password: string
}

export type RegisterDataType = {
    email: string
    password: string
}