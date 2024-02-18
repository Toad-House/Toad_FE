import axios from 'axios';
const SERVER_URL = "";

const request = axios.create({
    baseURL: `${SERVER_URL}`,
    headers : {
        'Content-Type': 'application/json',
    },
});


export default request;
