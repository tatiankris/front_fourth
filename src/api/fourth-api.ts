import axios from "axios";

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
        return instance.post('/api/auth/login', data)
    }
}

export const usersAPI = {
    users() {
        return instance.get('/api/users')
    }

}

type LoginDataType = {
    email: string
    password: string
}

type RegisterDataType = {
    email: string
    password: string
}