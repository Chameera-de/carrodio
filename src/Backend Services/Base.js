import axios from 'axios';
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

// Put base URL here
const API = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Change here as you want
if(currentUserSubject.value){
    API.defaults.headers.common['Authorization'] = currentUserSubject.value.token;
}

export default API;