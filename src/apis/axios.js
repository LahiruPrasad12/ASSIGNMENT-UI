import axios from "axios";
let version = 'api/v1'

const instance = axios.create({
    baseURL: `https://mighty-garden-33602.herokuapp.com/${version}`
})

if (localStorage.getItem('JWT')) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('JWT')}`;
}

export default instance;