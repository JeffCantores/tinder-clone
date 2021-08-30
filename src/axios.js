import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jeff-cantores-tinder-backend.herokuapp.com'
})

export default instance;

