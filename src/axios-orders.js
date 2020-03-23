import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-23410.firebaseio.com/'
});

export default instance;