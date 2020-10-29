import axios from 'axios';
// import VueAlertify from 'vue-alertify';
// var   $alertify = new VueAlertify();



const API_URL = 'http://localhost:5000';

// const API_URL = `https://ideal-back.herokuapp.com`

// const frontURL = `https://ideal-it.herokuapp.com`

const frontURL = `https://www.ideal-nig.org`
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
        
        return axios.post(`${API_URL}/${url}`, data).then(
         
        )
    }
    putRequest(url, data) {
        
        return axios.put(`${API_URL}/${url}`, data).then(
         
        )
    }
    getUrl(){
        return frontURL
    }
}