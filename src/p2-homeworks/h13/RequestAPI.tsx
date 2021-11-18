import axios from 'axios'


export type ResponseType = {
    body: {}
    info: string
    error: string
}

export const requestAPI = {
    makeRequest(success: boolean) {
        return axios.post<ResponseType>('https://neko-cafe-back.herokuapp.com/auth/test',{success})
    }
}