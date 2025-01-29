import axios from 'axios';


const currentUser = localStorage.getItem('currentUser')

var user = currentUser ? JSON.parse(currentUser) : null

console.log(user)


const SERVER = axios.create({
    baseURL: 'http://localhost:8800/api/',

    withCredentials: true

})

export default SERVER;
