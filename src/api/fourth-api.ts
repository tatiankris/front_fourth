import axios from "axios";
import {GridSelectionModel} from "@mui/x-data-grid";

export const instance = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: process.env.REACT_APP_BACK_URL || 'https://back-fourth-tatiankris.vercel.app/',
})

export const authAPI = {
    login(data: LoginDataType) {
        return instance.post('/api/auth/login', data)
    },
    register(data: RegisterDataType) {
        return instance.post('/api/auth/registration', data)
    },
    me() {
        return instance.get('/api/auth/me', {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    },
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