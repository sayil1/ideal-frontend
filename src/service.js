import axios from 'axios';
const API_URL = 'http://localhost:5000';
// eslint-disable-next-line no-unused-vars
export class Services {
    constructor(){
        
    }
    testers(){
        // eslint-disable-next-line no-console
        alert('i see u bro')
    }
    getRequest(url) {
        return axios.get(`${API_URL}/${url}`)
    }
    postRequest(url, data) {
        return axios.post(`${API_URL}/${url}`, data)
    }
}